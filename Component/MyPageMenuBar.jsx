//왼쪽 메뉴바 컴포넌트

import '../css/MyPageMenuBar.css'
import {  Link } from 'react-router-dom';


function MypageMenuBar() {

    return(
        <div>
            <h1 className="title">마이페이지</h1>
            <ul>
                <div className='menu' >
                    <li><a href="/">홈</a></li>
                    <li><Link to = "/info">내 정보</Link></li>
                    <li><Link to = "#">상품 관리</Link></li>
                    <li><Link to = "#">배송지 관리</Link></li>
                    <li><Link to = "#">결제수단 관리</Link></li>
                    <li><Link to = "#">일반 설정</Link></li>
                </div>
            </ul>

        </div>
    );
}

export default MypageMenuBar;