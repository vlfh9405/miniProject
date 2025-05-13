// useParams와 useNavigate 훅을 react-router-dom에서 임포트합니다. 
// useParams는 URL 파라미터를 가져오고, useNavigate는 페이지 이동을 처리합니다.
import { useParams, useNavigate } from 'react-router-dom';
// 이 컴포넌트의 스타일을 위한 CSS 파일을 임포트합니다.
import '../css/ProductDetail.css';

// ProductDetail 컴포넌트는 상품 목록을 props로 받아서, URL 파라미터로 해당 상품을 찾고 상세 정보를 표시합니다.
export default function ProductDetail({ products }) {
  // URL 파라미터에서 'id'를 가져옵니다. 이 'id'는 URL에서 상품을 구분하는 값입니다.
  const { id } = useParams();
  // 페이지 이동을 위한 navigate 함수를 사용합니다.
  const navigate = useNavigate();
  // 주어진 id에 해당하는 상품을 products 배열에서 찾습니다. 상품 id와 URL의 id가 일치하는지 확인합니다.
  const product = products.find((p) => p.id.toString() === id);

  // 상품이 없을 경우, '상품을 찾을 수 없습니다.'라는 메시지를 표시합니다.
  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  // '상품 목록으로 돌아가기' 버튼을 클릭했을 때 호출되는 함수입니다. 홈 페이지로 이동합니다.
  const handleBack = () => {
    navigate('/');
  };

  return (
    // 상품 상세 정보를 담을 컨테이너 div입니다.
    <div className="product-detail-container">
      {/* 상품의 이미지입니다. 만약 이미지가 로드되지 않으면 기본 이미지를 사용하도록 설정합니다. */}
      <img
        src={product.image}  // 상품의 이미지 URL을 src로 설정합니다.
        alt={product.pdName} // 상품 이름을 alt 속성에 넣어 접근성 향상
        className="product-detail-image" // CSS 스타일을 적용할 클래스 이름
        onError={(e) => (e.target.src = '/images/default.jpg')} // 이미지 로드 실패 시 기본 이미지를 표시
      />
      {/* 상품의 이름을 표시합니다. */}
      <h2 className="product-detail-name">{product.pdName}</h2>
      {/* 상품의 가격을 원 단위로 표시합니다. toLocaleString()을 사용하여 천 단위 구분 기호를 추가합니다. */}
      <p className="product-detail-price">{product.price.toLocaleString()}원</p>
      {/* 상품의 카테고리를 표시합니다. */}
      <p className="product-detail-category">{product.category}</p>
      {/* 상품의 상세 설명을 표시합니다. */}
      <p className="product-detail-description">{product.description}</p>

      {/* '상품 목록으로 돌아가기' 버튼입니다. 클릭 시 handleBack 함수가 실행되어 홈 페이지로 이동합니다. */}
      <button className="product-detail-back-btn" onClick={handleBack}>
        상품 목록으로 돌아가기
      </button>
    </div>
  );
}
