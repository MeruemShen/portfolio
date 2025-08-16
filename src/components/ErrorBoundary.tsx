import React from "react";

type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    // Log the error for diagnostics – can be extended to send to an endpoint
    console.error("App ErrorBoundary caught: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "white", padding: 24 }}>
          <h1>Un problème est survenu</h1>
          <p>Veuillez recharger la page. Si le problème persiste, contactez-nous.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
