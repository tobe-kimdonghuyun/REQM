import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RemoteErrorBoundary from './components/RemoteErrorBoundary';
import Home from './pages/Home';
import NexacroPage from './pages/NexacroPage';

// 원격 모듈은 실제로 사용되는 라우트에 진입할 때만 다운로드하도록 지연 로딩한다.
const CartApp = lazy(() => import('cart/Cart'));

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart/*"
            element={
              <RemoteErrorBoundary remoteName="cart">
                <Suspense fallback={<p>장바구니 불러오는 중...</p>}>
                  <CartApp />
                </Suspense>
              </RemoteErrorBoundary>
            }
          />
          <Route path="/nexacro/*" element={<NexacroPage />} />
        </Routes>
      </main>
    </div>
  );
}
