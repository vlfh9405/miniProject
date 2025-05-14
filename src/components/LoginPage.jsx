// 로그인 폼 컴포넌트를 import (입력 필드와 로그인 로직 포함)
import LoginForm from "../components/LoginForm";

// 페이지 이동을 위한 Link 컴포넌트를 react-router-dom에서 import
import { Link } from "react-router-dom";

// 로그인 페이지에 적용할 CSS 파일 import
import "../css/LoginPage.css";

// LoginPage 컴포넌트 정의
const LoginPage = ({onLoginSuccess }) => {
  return (
    // 전체 로그인 페이지를 감싸는 div, 클래스명으로 스타일 지정
    <div className="login-page">

      {/* 로그인 입력 폼 컴포넌트 출력 */}
      <LoginForm LoginForm onLoginSuccess={onLoginSuccess} />

      {/* 로그인/회원가입 링크를 담는 영역 */}
     
    </div>
  );
};

// LoginPage 컴포넌트를 외부에서 사용할 수 있도록 export
export default LoginPage;
