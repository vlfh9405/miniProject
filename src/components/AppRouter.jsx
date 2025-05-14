// React Router에서 필요한 컴포넌트들을 import
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 로그인 페이지 컴포넌트 import
import LoginPage from "./LoginPage";

// 회원가입 페이지 컴포넌트 import
import SignupPage from "./SignupPage";

// 라우팅 설정을 담당하는 AppRouter 컴포넌트 정의
const AppRouter = () => {
  return (
    // 전체 애플리케이션에 라우팅 기능을 적용하기 위해 Router로 감쌈
    <Router>
      {/* 여러 Route들을 묶어서 정의하는 컨테이너 */}
      <Routes>
        {/* 기본 경로 "/"로 접근 시 "/login"으로 자동 리디렉션 */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* "/login" 경로에 LoginPage 컴포넌트를 렌더링 */}
        <Route path="/login" element={<LoginPage />} />
        {/* "/signup" 경로에 SignupPage 컴포넌트를 렌더링 */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

// AppRouter 컴포넌트를 외부에서 사용할 수 있도록 export
export default AppRouter;
