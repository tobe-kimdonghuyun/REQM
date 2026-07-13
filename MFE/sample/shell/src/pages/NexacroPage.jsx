import React from 'react';

// webpack.EnvironmentPlugin(shell/webpack.config.js)이 process.env.NEXACRO_REMOTE_URL을
// 빌드 시점에 문자열로 치환한다. 기본값은 빈 문자열 → 아직 실제 nexacroN 배포가 없다는 뜻.
const NEXACRO_REMOTE_URL = process.env.NEXACRO_REMOTE_URL || '';

export default function NexacroPage() {
  return (
    <div>
      <h2>nexacroN 연동 (확장 지점 스텁)</h2>
      <p>
        이 화면은 Module Federation이 아니라 <code>&lt;nexacro-remote&gt;</code> Web Component +
        iframe으로 nexacroN 화면을 붙이기 위한 자리다. 자세한 설계 배경은{' '}
        <code>MFE/MFE_샘플_동작_흐름.md</code> 문서의 "nexacroN 확장 지점" 절 참고.
      </p>
      <div className="remote-boundary" style={{ borderColor: '#9ca3af' }}>
        <p className="remote-tag" style={{ color: '#4b5563' }}>
          [remote: nexacro-stub] NEXACRO_REMOTE_URL={NEXACRO_REMOTE_URL || '(미설정)'}
        </p>
        {NEXACRO_REMOTE_URL ? (
          <nexacro-remote src={NEXACRO_REMOTE_URL}></nexacro-remote>
        ) : (
          <nexacro-remote></nexacro-remote>
        )}
      </div>
    </div>
  );
}
