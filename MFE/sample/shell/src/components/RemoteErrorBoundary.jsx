import React from 'react';

// 원격 서버(예: remote-cart) 장애 시 shell 전체가 죽지 않도록 격리하는 경계.
// React.lazy가 reject되면(네트워크 실패, remoteEntry.js 404 등) 여기서 잡힌다.
export default class RemoteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error(`[RemoteErrorBoundary] "${this.props.remoteName}" 원격 모듈 로드 실패`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <p>
            <strong>{this.props.remoteName}</strong> 원격 모듈을 불러오지 못했습니다. 해당 dev
            server가 켜져 있는지 확인해주세요.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
