import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [nexacroStatus, setNexacroStatus] = useState(null);

  useEffect(() => {
    // cart remote가 발행하는 이벤트를 구독한다 (패턴 1: 브라우저 CustomEvent).
    const handleCartUpdated = (e) => setCartCount(e.detail.count);
    window.addEventListener('shop:cart-updated', handleCartUpdated);
    return () => window.removeEventListener('shop:cart-updated', handleCartUpdated);
  }, []);

  useEffect(() => {
    // nexacro-remote-element가 postMessage를 CustomEvent로 변환해 재발행하는 이벤트를 구독한다.
    // Module Federation remote(cart)와 동일한 방식(window CustomEvent)으로 소비할 수 있다.
    const handleNexacroStatus = (e) => setNexacroStatus(e.detail);
    window.addEventListener('nexacro:status', handleNexacroStatus);
    return () => window.removeEventListener('nexacro:status', handleNexacroStatus);
  }, []);

  return (
    <header>
      <strong>MFE 샘플</strong>
      <Link to="/">홈</Link>
      <Link to="/cart">장바구니 ({cartCount})</Link>
      <Link to="/nexacro">nexacroN 연동 (스텁){nexacroStatus ? ` — ${JSON.stringify(nexacroStatus)}` : ''}</Link>
    </header>
  );
}
