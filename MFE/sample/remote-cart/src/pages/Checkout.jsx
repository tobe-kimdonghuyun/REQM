import React from 'react';
import { Link } from 'react-router-dom';

export default function Checkout({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>결제 (Checkout)</h2>
      {cartItems.length === 0 ? (
        <p>담긴 상품이 없습니다.</p>
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <li key={`${item.id}-${idx}`}>
              {item.name} - {item.price.toLocaleString()}원
            </li>
          ))}
        </ul>
      )}
      <p>합계: {total.toLocaleString()}원</p>
      <Link to="..">← 장바구니로 돌아가기</Link>
    </div>
  );
}
