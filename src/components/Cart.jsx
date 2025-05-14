// Cart.css 스타일 시트를 임포트하여 이 컴포넌트에 스타일을 적용합니다.
import '../css/Cart.css';
// Cart 컴포넌트는 장바구니 항목(cartItems), 수량 증가(onIncrease), 감소(onDecrease), 제거(onRemove), 구매(onPurchase) 기능을 props로 받습니다.
export default function Cart({ cartItems, onIncrease, onDecrease, onRemove, onPurchase }) {
  // cartItems 배열을 순회하며 각 아이템의 가격과 수량을 곱하여 총합을 계산합니다.

  
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    
    // 장바구니 전체 컨테이너 div입니다. 클래스 이름은 'cart-container'입니다.
    <div className="cart-container">
      {/* 장바구니 제목을 표시합니다. 제목 앞에 장바구니 아이콘(🛒)을 추가합니다. */}
      <h2 className="cart-title">🛒 장바구니</h2>

      {/* cartItems 배열이 비어 있으면 "장바구니가 비어 있습니다." 메시지를 표시합니다. */}
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          {/* 장바구니 항목이 있을 경우 각 항목을 리스트로 표시합니다. */}
          <ul>
            {/* 각 cartItems의 항목을 li로 나열합니다. */}
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                {/* 상품명과 가격 정보를 표시합니다. */}
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.pdName}</div>
                  {/* 가격 * 수량을 계산하여 총 금액을 표시합니다. toLocaleString()을 사용하여 숫자에 천 단위 구분 기호를 추가합니다. */}
                  <div>{item.price.toLocaleString()}원 × {item.quantity}개 = {(item.price * item.quantity).toLocaleString()}원</div>
                </div>

                {/* 장바구니 항목에서 수량 증가, 감소, 삭제 버튼을 제공합니다. */}
                <div className="cart-item-actions">
                  {/* 수량을 1개 증가시키는 버튼입니다. 클릭 시 onIncrease 함수가 호출됩니다. */}
                  <button onClick={() => onIncrease(item.id)}>➕</button>
                  {/* 수량을 1개 감소시키는 버튼입니다. 클릭 시 onDecrease 함수가 호출됩니다. */}
                  <button onClick={() => onDecrease(item.id)}>➖</button>
                  {/* 장바구니에서 상품을 제거하는 버튼입니다. 클릭 시 onRemove 함수가 호출됩니다. */}
                  <button onClick={() => onRemove(item.id)}>❌</button>
                </div>
              </li>
            ))}
          </ul>
          {/* 장바구니의 총 결제 금액을 표시합니다. */}
          <div className="cart-total">총 결제 금액: {total.toLocaleString()}원</div>
        </>
      )}

      {/* 장바구니에 항목이 있으면 '구매하기' 버튼을 표시합니다. 클릭 시 onPurchase 함수가 호출됩니다. */}
      {cartItems.length > 0 && (
        <button className="cart-purchase-btn" onClick={onPurchase}>
          🧾 구매하기
        </button>
      )}
    </div>
  );
}
