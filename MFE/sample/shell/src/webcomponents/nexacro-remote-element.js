// nexacroN을 MFE remote로 붙이기 위한 확장 지점 (코드 스텁).
//
// nexacroN 산출물(launch.html + nexacrolib/framework/Framework.js + nexacro._loadADL())은
// Webpack 컨테이너 포맷이 아니라서 Module Federation으로 직접 통합할 수 없다.
// 대신 이 저장소의 eGovFrame 연동 선례(nexacroN_rules.md의 <iframe src="/nexa_ui/launch.html">)를
// 따라 iframe으로 격리해 붙이고, 프레임워크 중립적인 Web Component로 감싼다.
//
// 사용법: <nexacro-remote src="http://localhost:9091/REQM/.../launch.html"></nexacro-remote>
// src를 비워두면(현재 기본값) "아직 설정되지 않음" 플레이스홀더만 표시한다 — 실제 nexacroN
// 배포가 준비되면 NEXACRO_REMOTE_URL 환경변수(shell/webpack.config.js EnvironmentPlugin)만
// 실제 경로로 바꾸면 된다.
class NexacroRemoteElement extends HTMLElement {
  static get observedAttributes() {
    return ['src'];
  }

  constructor() {
    super();
    this._handleMessage = this._handleMessage.bind(this);
    this._expectedOrigin = null;
    this._iframe = null;
  }

  connectedCallback() {
    this._render();
  }

  disconnectedCallback() {
    window.removeEventListener('message', this._handleMessage);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src' && oldValue !== newValue) {
      this._render();
    }
  }

  _render() {
    window.removeEventListener('message', this._handleMessage);
    this.innerHTML = '';
    this._iframe = null;
    this._expectedOrigin = null;

    const src = this.getAttribute('src');
    if (!src) {
      const placeholder = document.createElement('div');
      placeholder.className = 'placeholder-box';
      placeholder.textContent =
        'nexacroN 원격 URL이 아직 설정되지 않았습니다. NEXACRO_REMOTE_URL 환경변수(또는 src 속성)를 ' +
        '실제 launch.html 경로로 설정하면 이 자리에 nexacroN 화면이 iframe으로 표시됩니다.';
      this.appendChild(placeholder);
      return;
    }

    let expectedOrigin;
    try {
      expectedOrigin = new URL(src, window.location.href).origin;
    } catch (err) {
      const errorBox = document.createElement('div');
      errorBox.className = 'placeholder-box';
      errorBox.textContent = `nexacroN 원격 URL이 올바르지 않습니다: ${src}`;
      this.appendChild(errorBox);
      return;
    }
    this._expectedOrigin = expectedOrigin;

    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = 'nexacroN remote';
    iframe.style.width = '100%';
    iframe.style.minHeight = '480px';
    iframe.style.border = '1px solid #d1d5db';
    iframe.style.borderRadius = '8px';
    // allow-same-origin은 postMessage 통신에 필요하지만 sandbox의 격리 효과를 낮춘다.
    // 반드시 신뢰할 수 있는 사내 nexacroN 배포 origin에만 사용할 것.
    iframe.sandbox = 'allow-scripts allow-same-origin allow-forms';

    this.appendChild(iframe);
    this._iframe = iframe;

    window.addEventListener('message', this._handleMessage);
  }

  _handleMessage(event) {
    // origin 검증 없이 postMessage를 신뢰하면 임의의 페이지가 위조 메시지를 보낼 수 있다.
    if (!this._expectedOrigin || event.origin !== this._expectedOrigin) return;
    if (!this._iframe || event.source !== this._iframe.contentWindow) return;

    const payload = event.data;
    if (!payload || payload.namespace !== 'nexacro' || typeof payload.type !== 'string') return;

    // nexacroN 쪽(iframe 내부 스크립트)에서
    //   window.parent.postMessage({ namespace: 'nexacro', type: 'status', detail: {...} }, shellOrigin)
    // 형태로 보내면, shell이 이해하는 window CustomEvent(`nexacro:status`)로 재발행한다.
    // 이렇게 하면 shell의 나머지 코드는 Module Federation remote(cart)의 CustomEvent와
    // 동일한 방식으로 nexacroN 이벤트도 소비할 수 있다 (Header.jsx 참고).
    window.dispatchEvent(new CustomEvent(`nexacro:${payload.type}`, { detail: payload.detail }));
  }
}

if (!customElements.get('nexacro-remote')) {
  customElements.define('nexacro-remote', NexacroRemoteElement);
}

export default NexacroRemoteElement;
