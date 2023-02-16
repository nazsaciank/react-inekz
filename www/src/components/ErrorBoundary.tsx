import React from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    readonly state: ErrorBoundaryState = {
        hasError: false,
    };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ hasError: true });
        console.error("ErrorBoundary", error);
        console.error("ErrorBoundaryInfo", errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) return <h1>Something went wrong.</h1>;

        return children;
    }
}

export default ErrorBoundary;
