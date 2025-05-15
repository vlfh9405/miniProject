// useState 훅을 react에서 임포트하여 상태를 관리합니다.
import { useState } from 'react';
// Link 컴포넌트를 react-router-dom에서 임포트하여 페이지 간 내비게이션을 처리합니다.
import { Link } from 'react-router-dom';
// 이 컴포넌트의 스타일을 위한 CSS 파일을 임포트합니다.
import '../css/ProductList.css';

// ProductList 컴포넌트는 상품 목록을 표시하고, 수량 변경 및 장바구니 추가 기능을 제공합니다.
export default function ProductList({ products, onAddToCart, isLoggedIn }) {
  // 상품별 수량을 추적하는 상태를 관리합니다. 초기값은 빈 객체로 설정됩니다.
  const [quantities, setQuantities] = useState({});

  // 수량 변경 시 재고 초과 방지 함수입니다.
  const handleQuantityChange = (id, value) => {
    // 해당 상품의 재고를 찾고, 기본값으로 1을 설정합니다.
    const stock = products.find((p) => p.id === id)?.stock || 1;
    // 입력값을 정수로 변환하며, 값이 비어있으면 1로 처리합니다.
    let qty = parseInt(value, 10) || 1;

    // 수량이 재고를 초과하면 재고 수로 설정하고, 1개 이하로 설정되지 않도록 보정합니다.
    if (qty > stock) qty = stock;
    if (qty < 1) qty = 1;

    // 수량을 상태에 업데이트합니다.
    setQuantities({ ...quantities, [id]: qty });
  };

  // 장바구니에 상품을 추가하는 함수입니다.
  const handleAdd = (product) => {
    if(!isLoggedIn){
      alert("로그인이 필요합니다.")
      return;
    }
    // 해당 상품의 수량을 가져오고, 수량이 없으면 기본값 1로 설정합니다.
    const quantity = quantities[product.id] || 1;
    // onAddToCart 함수로 상품과 수량을 전달하여 장바구니에 추가합니다.
    onAddToCart(product, quantity);
    // 사용자에게 상품이 장바구니에 추가되었다는 알림을 표시합니다.
    alert(`상품 '${product.pdName}'을(를) ${quantity}개 장바구니로 추가하셨습니다.`);

    // 수량 초기화를 위해 해당 상품의 수량을 1로 리셋합니다.
    setQuantities((prev) => ({
      ...prev,
      [product.id]: 1
    }));
  };

  return (
    // 상품 목록을 감싸는 div 요소입니다.
    <div>
      {/* 상품 목록 제목을 중앙 정렬하고, 아래 마진을 추가합니다. */}
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>상품 목록</h2>
      {/* 상품 목록을 ul 요소로 감싸고, 각 상품은 li로 렌더링됩니다. */}
      <ul className="product-list-container">
        {/* products 배열을 순회하면서 각 상품을 리스트 항목으로 표시합니다. */}
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {/* 상품 이미지를 표시하고, 이미지가 없으면 기본 이미지를 표시하도록 설정합니다. */}
            <img
              src={product.image} // 상품의 이미지 URL을 src로 설정합니다.
              alt={product.pdName} // 상품명을 alt 속성으로 설정하여 접근성을 높입니다.
              className="product-image" // 이미지에 CSS 스타일을 적용합니다.
              onError={(e) => (e.target.src = '/images/default.jpg')} // 이미지 로드 실패 시 기본 이미지를 표시합니다.
            />
            <div className="product-details">
              {/* 상품명은 상품 상세 페이지로 이동할 수 있는 링크입니다. */}
              <Link to={`./detail/${product.id}`}>{product.pdName}</Link>
              {/* 상품의 가격을 원 단위로 표시하고, 천 단위 구분 기호를 사용합니다. */}
              <p className="price">{product.price.toLocaleString()}원</p>
              {/* 상품의 카테고리를 표시합니다. */}
              <p className="category">{product.category}</p>
              {/* 상품의 재고 수를 표시합니다. */}
              <p>재고: {product.stock}개</p>

              {/* 상품 수량을 변경할 수 있는 입력 필드입니다. */}
              <input
                type="number" // 숫자만 입력할 수 있는 필드입니다.
                min="1" // 최소 수량은 1개입니다.
                max={product.stock} // 최대 수량은 재고 수에 맞춥니다.
                disabled={product.stock === 0} // 재고가 없으면 입력을 비활성화합니다.
                value={quantities[product.id] || 1} // 해당 상품의 수량을 상태에서 가져옵니다.
                onChange={(e) => handleQuantityChange(product.id, e.target.value)} // 수량 변경 시 handleQuantityChange 호출
              />

              {/* 장바구니에 상품을 추가하는 버튼입니다. */}
              <button
                onClick={() => handleAdd(product)} // 버튼 클릭 시 해당 상품을 장바구니에 추가합니다.
                disabled={product.stock === 0} // 재고가 없으면 버튼을 비활성화합니다.
                className="add-to-cart-button" // 버튼에 CSS 스타일을 적용합니다.
              >
                {/* 상품이 품절이면 '재고 없음', 아니면 '장바구니 추가'로 표시됩니다. */}
                {product.stock === 0 ? '재고 없음' : '장바구니 추가'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
