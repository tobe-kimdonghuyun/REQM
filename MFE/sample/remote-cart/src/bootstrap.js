// remote-cart를 독립 실행(http://localhost:3001)할 때만 사용되는 진입점.
// shell에 로드될 때는 이 파일이 아니라 App.jsx(CartApp)가 shell의 BrowserRouter 안에 마운트된다.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CartApp from './App';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/cart">
    <CartApp />
  </BrowserRouter>
);
