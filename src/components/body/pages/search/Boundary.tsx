import { Component, ErrorInfo, ReactNode } from "react";
import * as PropTypes from "prop-types";

interface Props {
  children: ReactNode;
  isError: boolean;
}

interface State {
  hasError: boolean;
}

class Boundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static propTypes = {
    children: PropTypes.element,
    isError: PropTypes.bool,
  };

  componentDidUpdate() {
    if (this.state.hasError && !this.props.isError) {
      this.setState({ hasError: false });
    }
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Try change search request!</h1>;
    }

    return this.props.children;
  }
}

export default Boundary;
