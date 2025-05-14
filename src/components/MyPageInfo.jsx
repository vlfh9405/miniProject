//내 정보 콘텐츠 컴포넌트
import MypageMenuBar from "./MypageMenuBar";
import '../css/MypageInfo.css'

const customer = {
  name: "홍길동",
  id: "hong123",
  email: "hong123@naver.com",
  phone: "010-1234-5678",
  membership: "Gold"
};

function MypageInfo() {

    return (
        <div className="mypage-container"> {/* 💡 이게 핵심 flex 부모 */}
        <div className="menubar">
            <MypageMenuBar />
        </div>
        <div className="info">
            {/* <h2>내 정보</h2>
            <button className="update">수정</button>
            <hr /> */}
           <div className="info-card">
        <div className="info-header">
            <h2>내 정보</h2>
            <button>수정</button>
        </div>
            <div className="info-item"><span>이름</span><p>{customer.name}</p></div>
            <div className="info-item"><span>아이디</span><p>{customer.id}</p></div>
            <div className="info-item"><span>이메일</span><p>{customer.email}</p></div>
            <div className="info-item"><span>전화번호</span><p>{customer.phone}</p></div>
            <div className="info-item"><span>회원등급</span><p>{customer.membership}</p></div>
        </div>

        </div>
        </div>
    )
}

export default MypageInfo;