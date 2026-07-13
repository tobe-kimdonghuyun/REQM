import React from 'react';
import { Link } from 'react-router-dom';

export default function CartList({ products, cartItems, onAdd }) {
  return (
    <div>
      <h2>장바구니 (Cart MFE)</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()}원{' '}
            <button type="button" onClick={() => onAdd(product)}>
              담기
            </button>
          </li>
        ))}
      </ul>
      <p>담긴 상품 수: {cartItems.length}</p>
      <Link to="checkout">결제하러 가기 →</Link>
    </div>
  );
}
