// shell이 React.lazy(() => import('cart/Cart'))로 불러오는 노출 컴포넌트.
// 라우터 중첩 금지 규칙에 따라 여기서는 BrowserRouter를 감싸지 않고 Routes만 둔다.
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartList from './pages/CartList';
import Checkout from './pages/Checkout';

const INITIAL_PRODUCTS = [
  { id: 1, name: '무선 키보드', price: 39000 },
  { id: 2, name: '노트북 거치대', price: 25000 },
  { id: 3, name: 'USB-C 허브', price: 32000 },
];

export default function CartApp() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const next = [...prev, product];
      // shell의 Header가 이 이벤트를 구독해 장바구니 카운트를 갱신한다.
      // 이벤트 이름에 "shop:" 네임스페이스를 붙여 다른 MFE의 이벤트와 충돌하지 않게 한다.
      window.dispatchEvent(
        new CustomEvent('shop:cart-updated', {
          detail: { count: next.length },
        })
      );
      return next;
    });
  };

  return (
    <div className="remote-boundary">
      <p className="remote-tag">
        [remote: cart] 이 영역은 http://localhost:3001 에서 런타임에 로드된 원격 모듈입니다.
      </p>
      <Routes>
        <Route
          path="/"
          element={<CartList products={INITIAL_PRODUCTS} cartItems={cartItems} onAdd={addToCart} />}
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}
