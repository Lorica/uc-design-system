import React from 'react';
import ReactDOM from 'react-dom';

export type PortalProps = {
  /** Content to render in the portal. */
  children: NonNullable<React.ReactNode>;
};

/** Render within a portal using a declarative component API. */
export default class Portal extends React.PureComponent<PortalProps> {
  private node: HTMLDivElement | null = null;

  constructor(props: PortalProps) {
    super(props);

    // Create the container eagerly rather than inside `render()`. Under React 18
    // concurrent/StrictMode rendering, `render` can run for a tree that is never
    // committed, so mutating `document.body` there leaks (or loses) portal nodes.
    // SSR check.
    if (typeof document !== 'undefined') {
      this.node = document.createElement('div');
    }
  }

  componentDidMount() {
    // Attach on commit. StrictMode double-invokes the mount lifecycle, so guard
    // against re-appending the same node.
    if (this.node && document.body && this.node.parentNode !== document.body) {
      document.body.appendChild(this.node);
    }
  }

  componentWillUnmount() {
    if (this.node && this.node.parentNode) {
      this.node.parentNode.removeChild(this.node);
    }
  }

  render() {
    if (!this.node) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.node);
  }
}
