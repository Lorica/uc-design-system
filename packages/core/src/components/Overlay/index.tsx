import React from 'react';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import { scrollingParents, ArrayOfScrollables } from '../../utils/isScrollable';
import Portal from './Portal';

export type OverlayProps = {
  /** Content to display within the overlay. */
  children?: React.ReactNode;
  /** Enable userSelect and pointer events. */
  enableMouseInteraction?: boolean;
  /** True to be visible. */
  open?: boolean;
  /** True for non-modal appearance. */
  noBackground?: boolean;
  /** Callback for when the overlay should be closed.  */
  onClose: () => void;
};

export type OverlayState = {
  x: number;
  y: number;
  targetRectReady: boolean;
};

/** An overlay that masks the entire viewport and displays a chunk of content over it. */
export default class Overlay extends React.PureComponent<OverlayProps, OverlayState> {
  static defaultProps = {
    enableMouseInteraction: false,
    noBackground: false,
    open: false,
  };

  state = {
    x: 0,
    y: 0,
    targetRectReady: false,
  };

  rafHandle: number = 0;

  ref = React.createRef<HTMLDivElement>();

  scrollers: ArrayOfScrollables = [];

  componentDidMount() {
    // Measure on mount as well as on update. React 18's automatic batching can
    // collapse the post-mount re-render that previously triggered the first
    // `componentDidUpdate`, so the overlay never measured, `targetRectReady`
    // stayed false, and the popup (`open && targetRectReady`) never rendered.
    this.measurePosition();

    if (this.props.open && this.props.noBackground) {
      this.addScrollListeners();
    }
  }

  componentDidUpdate() {
    this.measurePosition();

    this.removeScrollListeners();

    if (this.props.open && this.props.noBackground) {
      this.addScrollListeners();
    }
  }

  private measurePosition() {
    const { current } = this.ref;

    /* istanbul ignore next: refs are hard */
    if (!current) {
      return;
    }

    cancelAnimationFrame(this.rafHandle);

    this.rafHandle = requestAnimationFrame(() => {
      // getBoundingClientRect causes a reflow
      const { x, y } = current.getBoundingClientRect() as DOMRect;

      // second rAF in case setState causes layout thrashing
      this.rafHandle = requestAnimationFrame(() => {
        // Functional update is safe under React 18 automatic batching and always
        // flips `targetRectReady` once measured, even when the rect is at (0, 0).
        this.setState((prev) =>
          prev.x === x && prev.y === y && prev.targetRectReady
            ? null
            : { x, y, targetRectReady: true },
        );
      });
    });
  }

  componentWillUnmount() {
    this.removeScrollListeners();
    cancelAnimationFrame(this.rafHandle);
  }

  private addScrollListeners = debounce(() => {
    const { current } = this.ref;

    this.removeScrollListeners();

    /* istanbul ignore next: refs are hard */
    if (current) {
      this.scrollers = scrollingParents(current);
      this.scrollers.forEach((node: EventTarget) => {
        node.addEventListener('scroll', this.handleScroll);
      });
    }
  });

  private removeScrollListeners = () => {
    this.scrollers.forEach((node: EventTarget) => {
      node.removeEventListener('scroll', this.handleScroll);
    });

    this.scrollers = [];
  };

  private handleResize = () => {
    this.forceUpdate();
  };

  private handleScroll = throttle(() => this.props.onClose(), 100);

  render() {
    const { onClose, enableMouseInteraction, open, children, noBackground } = this
      .props as Required<OverlayProps>;
    const { x, y, targetRectReady } = this.state;

    return (
      <div ref={this.ref}>
        {open && targetRectReady && (
          <Portal
            enableMouseInteraction={enableMouseInteraction}
            x={x}
            y={y}
            noBackground={noBackground}
            onClose={onClose}
            onResize={this.handleResize}
          >
            {children}
          </Portal>
        )}
      </div>
    );
  }
}
