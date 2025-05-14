// React의 useState 훅을 불러옴 (상태 관리용)
import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
// 로그인 폼에 사용할 CSS 파일 import
import "../css/LoginForm.css";

// LoginForm 컴포넌트 정의
const LoginForm = ({onLoginSuccess }) => {
  const navigate = useNavigate();
  // 사용자 입력값(id, pw)을 상태로 저장
  const [input, setInput] = useState({ id: "", pw: "" });

  // 로그인 실패 시 에러 메시지 저장
  const [error, setError] = useState(null);

  // 로그인 처리 함수 (form 제출 시 실행)
  const handleLogin = (e) => {
    e.preventDefault(); // form 제출 시 새로고침 방지

    // localStorage에 저장된 유저 정보를 불러옴
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // 저장된 유저 정보와 입력값이 일치하는지 비교
    if (savedUser && input.id === savedUser.id && input.pw === savedUser.pw) {
      alert("로그인 성공!"); // 로그인 성공 시 알림
      setError(null); // 에러 메시지 초기화
       if (onLoginSuccess) {
        onLoginSuccess(true);
        navigate("/*");
      }
    } else {
      setError("아이디 또는 비밀번호가 일치하지 않습니다."); // 실패 시 에러 메시지 출력
    }
  };

  return (
    // 로그인 페이지 전체를 감싸는 컨테이너 (중앙 정렬 등용)
    <>
    
    <div className="login-container">
      {/* form 태그로 감싸서 Enter 입력 시 onSubmit 실행 가능 */}
      <form className="login-card" onSubmit={handleLogin}>
        {/* 제목 */}
        <h2>로그인</h2>

        {/* 아이디 입력창 */}
        <input
          type="text"
          placeholder="아이디"
          value={input.id} // 상태 값 반영
          onChange={(e) => setInput({ ...input, id: e.target.value })} // 입력 시 상태 변경
          />

        {/* 비밀번호 입력창 */}
        <input
          type="password"
          placeholder="비밀번호"
          value={input.pw} // 상태 값 반영
          onChange={(e) => setInput({ ...input, pw: e.target.value })} // 입력 시 상태 변경
          />

        {/* 로그인 실패 시 에러 메시지 출력 */}
        {error && <div className="error-msg">❌ {error}</div>}

        {/* 로그인 버튼 (submit 역할을 함) */}
        <button type="submit">로그인하기</button> {/* ✅ type="submit" 지정으로 Enter 키 인식 가능 */}
      </form>
    </div>
    </>
  );
};

// 컴포넌트 export (다른 곳에서 사용할 수 있게 함)
export default LoginForm;
