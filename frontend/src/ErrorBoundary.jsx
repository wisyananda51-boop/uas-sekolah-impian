import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-blue-400/30">
            <h1 className="text-3xl font-bold text-red-300 mb-4">⚠️ Error Occurred</h1>
            <p className="text-blue-200 mb-4">
              Terjadi kesalahan pada aplikasi. Mohon refresh halaman atau hubungi support.
            </p>
            <p className="text-red-200 text-sm bg-red-900/20 p-3 rounded-lg mb-4 max-h-32 overflow-y-auto">
              {this.state.error?.toString()}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-6 py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-slate-950 font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Refresh Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
