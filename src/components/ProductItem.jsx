// Link 컴포넌트를 react-router-dom에서 임포트하여 페이지 간 내비게이션을 처리합니다.
import { Link } from 'react-router-dom';

// ProductItem 컴포넌트는 각각의 상품 정보를 표시하고, 장바구니에 추가하는 기능을 제공합니다.
export default function ProductItem({ product, onAddToCart }) {
  // 상품의 재고가 0 이하일 경우 '품절' 상태로 표시합니다.
  const isSoldOut = product.stock <= 0;

  return (
    // 상품 정보를 포함하는 div를 반환합니다.
    <div>
      {/* 상품명이 품절인 경우에는 상품명을 취소선으로 표시하고, 품절이 아니면 상품 상세 페이지로 이동할 수 있는 링크를 제공합니다. */}
      <h3>
        {/* isSoldOut이 true이면 취소선이 있는 상품명을, 아니면 링크를 통한 상품 상세 페이지 이동을 제공합니다. */}
        {isSoldOut ? <del>{product.pdName}</del> : <Link to={`/detail/${product.id}`}>{product.pdName}</Link>}
      </h3>
      
      {/* 상품 가격을 원 단위로 표시하며, 천 단위 구분 기호를 추가합니다. */}
      <p>가격: {product.price.toLocaleString()}원</p>
      
      {/* 상품 재고를 표시합니다. */}
      <p>재고: {product.stock}</p>
      
      {/* 상품의 카테고리를 표시합니다. */}
      <p>카테고리: {product.category}</p>
      
      {/* '장바구니' 버튼을 제공하고, 품절된 상품에는 버튼을 비활성화하여 클릭할 수 없게 합니다. */}
      <button onClick={() => onAddToCart(product)} disabled={isSoldOut}>
        장바구니
      </button>
    </div>
  );
}
