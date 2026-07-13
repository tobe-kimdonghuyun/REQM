import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>MFE 샘플</h1>
      <p>
        이 shell 앱은 <code>MFE/마이크로 프론트엔드(MFE) 정리.md</code> 문서에서 정리한
        Module Federation 구조를 실제로 구현한 예시입니다.
      </p>
      <ul>
        <li>
          <Link to="/cart">/cart</Link> — Webpack Module Federation으로 런타임에 로드되는 원격
          모듈(remote-cart, 포트 3001)
        </li>
        <li>
          <Link to="/nexacro">/nexacro</Link> — nexacroN을 iframe + Web Component로 연동하기 위한
          확장 지점(현재는 코드 스텁)
        </li>
      </ul>
    </div>
  );
}
