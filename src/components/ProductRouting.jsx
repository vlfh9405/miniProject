// react-router-dom에서 Router, Routes, Route, Link를 임포트하여 페이지 간 내비게이션을 처리합니다.
import { Routes, Route, Link } from 'react-router-dom';  // ❗ Router 제거
// React에서 useState 훅을 임포트하여 상태를 관리합니다.
import { useState } from 'react';
// 하위 컴포넌트들 (상품 목록, 상품 상세, 장바구니, 검색바 등)을 임포트합니다.
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import SearchBar from './SearchBar';

// 상품 데이터를 가져옵니다.
import productData from '../data/productData';
// 이 컴포넌트의 스타일을 위한 CSS 파일을 임포트합니다.
import '../css/ProductRouting.css'

export default function Routing() {

  // 장바구니 상태와 상품 목록 및 필터링된 상품 목록을 관리하는 useState 훅을 사용합니다.
  const [cart, setCart] = useState([]); // 장바구니 아이템을 저장하는 상태
  const [products, setProducts] = useState(productData); // 전체 상품 목록
  const [filtered, setFiltered] = useState(productData); // 필터링된 상품 목록

  // 장바구니에 상품을 추가하는 함수입니다.
  const handleAddToCart = (product, quantity) => {
    const selectedProduct = products.find((p) => p.id === product.id); // 선택된 상품을 찾습니다.
    
    // 재고가 부족하면 경고를 표시하고 함수 실행을 멈춥니다.
    if (selectedProduct.stock < quantity) {
      alert("재고가 부족합니다.");
      return;
    }

    // 이미 장바구니에 동일 상품이 있을 경우 수량을 업데이트하고 없으면 새 항목을 추가합니다.
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]); // 새 상품을 장바구니에 추가합니다.
    }

    // 상품의 재고를 감소시키고, 필터링된 상품 목록을 업데이트합니다.
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, stock: p.stock - quantity } : p
    );
    setProducts(updatedProducts);
    setFiltered(updatedProducts); // 필터링된 상품 목록을 업데이트
  };

  // 장바구니에서 수량을 증가시키는 함수입니다.
  const handleIncreaseQuantity = (productId) => {
    const product = products.find((p) => p.id === productId); // 해당 상품을 찾습니다.
    if (product.stock === 0) {
      alert("재고가 부족합니다.");
      return;
    }

    // 장바구니에서 해당 상품의 수량을 증가시키고 재고를 감소시킵니다.
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);

    const updatedProducts = products.map((p) =>
      p.id === productId ? { ...p, stock: p.stock - 1 } : p
    );
    setProducts(updatedProducts);
    setFiltered(updatedProducts);
  };

  // 장바구니에서 수량을 감소시키는 함수입니다.
  const handleDecreaseQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId); // 장바구니에서 해당 상품을 찾습니다.
    if (cartItem.quantity === 1) {
      handleRemoveItem(productId); // 수량이 1일 경우 해당 상품을 장바구니에서 제거합니다.
      return;
    }

    // 수량을 감소시키고 재고를 증가시킵니다.
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);

    const updatedProducts = products.map((p) =>
      p.id === productId ? { ...p, stock: p.stock + 1 } : p
    );
    setProducts(updatedProducts);
    setFiltered(updatedProducts);
  };

  // 장바구니에서 상품을 제거하는 함수입니다.
  const handleRemoveItem = (productId) => {
    const removedItem = cart.find((item) => item.id === productId); // 제거할 상품을 찾습니다.
    const updatedCart = cart.filter((item) => item.id !== productId); // 장바구니에서 해당 상품을 제거합니다.
    setCart(updatedCart);

    // 제거된 상품의 수량만큼 재고를 되돌립니다.
    const updatedProducts = products.map((p) =>
      p.id === productId ? { ...p, stock: p.stock + removedItem.quantity } : p
    );
    setProducts(updatedProducts);
    setFiltered(updatedProducts);
  };

  // 구매가 완료되면 장바구니를 초기화하고 구매 완료 메시지를 표시합니다.
  const handlePurchase = () => {
    alert("구매완료하였습니다.");
    setCart([]); // 장바구니를 비웁니다.
  };

  // 검색 기능을 처리하는 함수입니다.
  const handleSearch = (keyword, category) => {
    const lower = keyword.toLowerCase(); // 검색어를 소문자로 변환하여 비교합니다.
    const result = products.filter((product) => {
      const matchesKeyword =
        keyword === '' || product.pdName.toLowerCase().includes(lower); // 검색어와 상품명이 일치하는지 확인
      const matchesCategory =
        category === '' || product.category === category; // 카테고리 필터링
      return matchesKeyword && matchesCategory; // 두 조건을 모두 만족하는 상품을 필터링
    });
    setFiltered(result); // 필터링된 결과를 상태에 저장
  };

  return (
    <>
      {/* 상단 네비게이션 바 */}
      <header>
        <nav className="navbar">
          {/* 상품 목록과 장바구니 페이지로 이동할 수 있는 링크 */}
          <Link to="/product">상품 목록</Link>
          <Link to="/product/cart">장바구니</Link>
        </nav>
      </header>
  

      {/* 페이지 라우팅 설정 */}
      <Routes>
        {/* 기본 경로 ('/')에서 상품 목록과 검색바를 표시합니다. */}
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch} /> {/* 검색바 컴포넌트 */}
              <ProductList products={filtered} onAddToCart={handleAddToCart} /> {/* 상품 목록 컴포넌트 */}
            </>
          }
          />
        {/* 상품 상세 페이지 경로 '/detail/:id' */}
        <Route path="product/detail/:id" element={<ProductDetail products={products} />} />
        {/* 장바구니 페이지 경로 '/cart' */}
        <Route
          path="/cart"
          element={
            <Cart
            cartItems={cart}
            onIncrease={handleIncreaseQuantity} // 수량 증가 함수
            onDecrease={handleDecreaseQuantity} // 수량 감소 함수
            onRemove={handleRemoveItem} // 상품 제거 함수
            onPurchase={handlePurchase} // 구매 함수
            />
          }
          />
      </Routes>
    
  </>
  );
}
