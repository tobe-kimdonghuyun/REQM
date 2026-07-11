# 마이크로 프론트엔드(MFE) 정리

## 1. MFE란?

마이크로 프론트엔드는 백엔드의 마이크로서비스 개념을 프론트엔드에 적용한 아키텍처로, 하나의 큰 웹 앱을 기능(도메인) 단위의 독립적인 앱들로 분리해 개발·배포하는 방식이다. 예: 쇼핑몰을 검색 / 상품 / 장바구니 MFE로 나누고, 셸(컨테이너) 앱이 이를 하나의 화면으로 조합한다.

**장점**

- 독립 배포: 각 팀이 자기 MFE만 배포하며 릴리즈 주기가 자유롭다
- 팀 자율성: 도메인별 코드 소유권이 명확하고 코드 충돌이 줄어든다
- (이론상) 기술 스택 자율성 — 실무에서는 번들 크기 때문에 통일하는 경우가 많음

**단점**

- 공통 라이브러리 중복 로드로 번들 증가 가능
- MFE 간 상태 공유, 디자인 일관성, 라우팅 조율이 까다로움
- 규모 있는 다팀 조직에 적합. 작은 팀은 모놀리식이 더 단순하고 효율적일 수 있다

## 2. 통합 방식

| 방식 | 특징 | 비고 |
| :-: | :-: | :-: |
| 빌드 타임 (npm 패키지) | 셸이 의존성으로 설치해 함께 빌드 | 독립 배포 불가 → 반쪽짜리 MFE |
| iframe | 완전한 격리 (스타일/전역 충돌 없음) | 라우팅·반응형·성능 불편. 결제 위젯 등 보안 격리용 |
| Web Components | 커스텀 엘리먼트로 프레임워크 중립 통합 | SSR·상태 공유가 번거로움 |
| single-spa | URL 기준으로 여러 프레임워크 앱을 마운트/언마운트 | 오케스트레이션 라이브러리 |
| Module Federation | 런타임에 원격 모듈 로드 (Webpack 5+) | 현재 가장 널리 쓰임 |

## 3. Module Federation 상세

### 동작 흐름

1. 브라우저가 셸의 main.js 로드
2. 원격 서버의 remoteEntry.js(매니페스트) 로드
3. 공유 의존성 버전 협상 (react 등을 한 벌만 쓰기로 결정)
4. 필요한 모듈 청크만 다운로드 → 렌더링

원격 팀이 새 버전을 배포하면 호스트 재빌드 없이 다음 페이지 로드부터 새 코드가 반영된다.

### 원격 앱(cart) 설정

```javascript
// cart/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: { port: 3001 },
  output: { publicPath: 'auto' },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: { './Cart': './src/Cart' },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
    }),
  ],
};
```

### 호스트 앱(shell) 설정

```javascript
// shell/webpack.config.js
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    cart: 'cart@http://localhost:3001/remoteEntry.js',
  },
  shared: {
    react: { singleton: true, requiredVersion: '^18.0.0' },
    'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
  },
})
```

### 비동기 부트스트랩 (필수 관례)

공유 의존성 버전 협상이 비동기라서, 진입점에서 React를 바로 import하면 "Shared module is not available for eager consumption" 에러가 난다. 진입점을 두 단계로 분리:

```javascript
// src/index.js
import('./bootstrap');

// src/bootstrap.js — 실제 앱 시작
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
```

### 호스트에서 사용 (지연 로딩 + 에러 경계)

```javascript
const Cart = lazy(() => import('cart/Cart'));

<RemoteErrorBoundary>
  <Suspense fallback={<p>장바구니 로딩 중...</p>}>
    <Cart />
  </Suspense>
</RemoteErrorBoundary>
```

원격 서버 장애 시 셸 전체가 죽지 않도록 ErrorBoundary는 필수.

### 프로덕션 체크리스트

- **환경별 원격 주소**: `cart@${process.env.CART_URL}/remoteEntry.js` 또는 런타임 동적 원격 패턴 (A/B 테스트, 카나리 배포에 유용)
- **CORS**: 원격 서버/CDN에 `Access-Control-Allow-Origin` 헤더 필요. 빼먹으면 조용히 실패하는 것처럼 보임
- **캐싱**: remoteEntry.js는 no-cache(항상 최신), 해시 붙은 청크는 장기 캐싱
- **shared 버전 정책**: singleton 불일치 시 hooks가 깨질 수 있음. 조직 차원 버전 통일 필수. `strictVersion: true`로 조기 검출 가능
- **CSS 격리**: MF는 JS만 격리. CSS Modules / styled-components 등 자동 스코핑 사용
- **Webpack 외 옵션**: Vite → `@originjs/vite-plugin-federation`, 번들러 독립적 Module Federation 2.0 (`@module-federation/enhanced`, 타입 공유 지원). Next.js SSR 환경은 제약이 많아 서버 사이드 조합이나 Multi-Zones 검토

## 4. MFE 간 상태 공유

**대원칙: 최대한 공유하지 않는다.** 공유할수록 결합도가 다시 올라간다. 전역 스토어 통째 공유는 분산 모놀리스로 가는 지름길(안티패턴).

### 패턴 1: 브라우저 CustomEvent (가장 표준적)

```javascript
// 발행 (cart MFE)
window.dispatchEvent(
  new CustomEvent('shop:cart-updated', {
    detail: { count: items.length + 1 },
  })
);

// 구독 (header MFE)
useEffect(() => {
  const handler = (e) => setCount(e.detail.count);
  window.addEventListener('shop:cart-updated', handler);
  return () => window.removeEventListener('shop:cart-updated', handler);
}, []);
```

규칙: ① 이벤트 이름에 네임스페이스 접두사(`shop:`) ② detail에는 직렬화 가능한 데이터만 (함수/컴포넌트 참조 금지) ③ 이벤트 이름·페이로드 스키마를 팀 간 계약으로 문서화.

### 패턴 2: 타입이 붙은 공유 이벤트 버스

TypeScript로 이벤트명·페이로드를 컴파일 타임 검증하는 얇은 pub/sub 모듈을 만들어 `shared(singleton: true)`로 한 벌만 배포. singleton이 아니면 MFE마다 버스 인스턴스가 따로 생겨 이벤트가 서로 안 들리는 버그 발생.

구조: 발행자는 누가 듣는지 모르고, 구독자는 누가 보냈는지 모른다 (완전한 분리).

### 패턴 3: 상황별 선택지

- 인증 토큰·사용자 정보 등 "현재 상태" 조회 → 셸이 노출하는 조회 API (예: `shell/auth`의 `getUser()`)
- 새로고침 후에도 유지될 상태(필터, 탭) → URL 쿼리 파라미터
- 브라우저 탭 간 동기화 → BroadcastChannel
- Redux/Zustand 스토어 통째 공유 → 안티패턴 (스키마 변경 시 전 팀 동시 배포 필요)

## 5. 라우팅 통합

**핵심 질문: URL의 주인이 누구인가?** 표준 답은 계층 분할 — 셸이 1차 경로(`/cart`, `/products`)를 소유하고, 각 MFE는 자기 경로 아래 하위 라우팅(`/cart/checkout`)만 소유.

### 셸: 와일드카드로 위임

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/cart/*" element={<CartApp />} />
    <Route path="/products/*" element={<ProductsApp />} />
  </Routes>
</BrowserRouter>
```

### MFE: 라우터 중첩 금지

노출 컴포넌트는 `Routes`만 갖고, 단독 실행용 bootstrap에서만 `BrowserRouter`를 씌운다:

```jsx
// 노출용 App.jsx — 라우터 없음
export default function CartApp() {
  return (
    <Routes>
      <Route path="/" element={<CartList />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

// bootstrap.js — 단독 실행 시에만
<BrowserRouter basename="/cart">
  <CartApp />
</BrowserRouter>
```

`react-router-dom`은 반드시 shared singleton — 아니면 히스토리 객체가 두 개가 되어 `navigate()`가 셸에 반영되지 않는다.

### 프레임워크가 섞인 경우: 히스토리 브리지

라우터 인스턴스를 공유할 수 없으므로 브라우저 히스토리를 공유 지점으로 사용:

```javascript
export function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
```

### 실무 이슈

- **딥링크/새로고침**: 서버/CDN에 모든 경로를 index.html로 돌리는 SPA fallback 설정 필요
- **404 소유권**: 셸이 최상위 `*` 라우트로 전역 404, MFE는 자기 영역 내부 404만 처리
- **MFE 간 이동**: 상대 MFE의 공개 URL 계약(예: 상품 상세는 항상 `/products/:id`)을 문서로 고정

## 한 줄 요약

- 통합: 셸이 조합하고, Module Federation으로 런타임에 원격 모듈을 로드해 독립 배포를 실현
- 상태: 이벤트로 사실만 방송하고 스토어는 공유하지 않는다
- 라우팅: 셸이 1차 경로, MFE가 하위 경로를 소유하고 히스토리는 한 벌만 쓴다
