//왼쪽 메뉴바 컴포넌트

import '../css/MyPageMenuBar.css'
import { useNavigate } from 'react-router-dom';

function MypageMenuBar() {
    const navigate = useNavigate();
    return(
        <div>
            <h1 className="title">마이페이지</h1>
            <ul>
                <div className='menu' >
                    <li><button onClick={ () => {navigate("/")}}>홈</button></li>
                    <li><button onClick={ () => {navigate("/myPage/info")}}>내정보</button></li>
                    <li><button>상품 관리</button></li>
                    <li><button>배송지 관리</button></li>
                    <li><button>결제수단 관리</button></li>
                    <li><button>일반설정</button></li>
                </div>
            </ul>

        </div>
    );
}

export default MypageMenuBar;