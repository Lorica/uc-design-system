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
    // Measure on mount as well as on update. Previously the position was only
    // read in `componentDidUpdate`, so the overlay relied on an external
    // re-render cascade to ever flip `targetRectReady`. React 18 automatic
    // batching changes when those cascading updates flush, which could leave
    // the popup permanently hidden. Measuring on mount removes that dependency.
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

  componentWillUnmount() {
    this.removeScrollListeners();
    cancelAnimationFrame(this.rafHandle);
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

      // use a second rAF in case setState causes layout thrashing
      this.rafHandle = requestAnimationFrame(() => {
        // Functional update is safe under React 18 automatic batching, and
        // always flips `targetRectReady` once measured. The previous guard
        // (`x !== state.x || y !== state.y`) could leave the overlay hidden
        // forever when the measured rect sits at the origin (0, 0).
        this.setState((prev) =>
          prev.x === x && prev.y === y && prev.targetRectReady
            ? null
            : { x, y, targetRectReady: true },
        );
      });
    });
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
