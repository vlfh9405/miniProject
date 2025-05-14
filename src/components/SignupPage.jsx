// 회원가입 폼 컴포넌트를 import (입력 필드 및 가입 로직 포함)
import SignupForm from "../components/SignupForm";
// 페이지 이동을 위한 Link 컴포넌트를 react-router-dom에서 import

// 회원가입 페이지 전용 CSS 파일을 import
import "../css/SignupPage.css";

// SignupPage 컴포넌트 정의
const SignupPage = () => {
  return (
    <>
   
    {/* // 전체 페이지를 감싸는 최상위 div (스타일링용 클래스) */}
    <div className="signup-page">

      {/* 회원가입 폼 컴포넌트 렌더링 */}
      <SignupForm />
      {/* 로그인/회원가입으로 이동하는 링크 영역 */}
    </div>
    </>
  );
};

// SignupPage 컴포넌트를 외부에서 사용할 수 있도록 export
export default SignupPage;
