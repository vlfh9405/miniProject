// React의 useState 훅을 import (상태 관리용)
import { useState } from "react";

// 페이지 이동을 위한 useNavigate 훅을 import
import { useNavigate } from "react-router-dom";

// 회원가입 폼에 적용할 CSS 파일을 import
import "../css/SignupForm.css";

// SignupForm 컴포넌트 정의
const SignupForm = () => {
  // 사용자 정보(id, pw, confirmPw)를 저장할 상태
  const [user, setUser] = useState({ id: "", pw: "", confirmPw: "" });

  // 아이디 중복 확인 결과 상태 (null: 미확인, true: 사용 가능, false: 중복)
  const [checkResult, setCheckResult] = useState(null);

  // 비밀번호 일치 여부 상태
  const [pwMatch, setPwMatch] = useState(null);

  // 비밀번호 유효성 검사 상태
  const [pwValid, setPwValid] = useState(null);

  // 페이지 이동을 위한 navigate 함수 생성
  const navigate = useNavigate();

  // 비밀번호 유효성 검증 함수
  const isPasswordValid = (password) => {
    const lengthOK = password.length >= 8; // 길이 체크
    const hasLetter = /[a-zA-Z]/.test(password); // 문자 포함 여부
    const hasNumber = /[0-9]/.test(password); // 숫자 포함 여부
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password); // 특수문자 포함 여부
    return lengthOK && hasLetter && hasNumber && hasSpecial;
  };

  // 아이디 중복 확인 처리 함수
  const handleCheckDuplicate = () => {
    const savedUser = JSON.parse(localStorage.getItem("user")); // 저장된 사용자 정보 가져오기
    if (savedUser && savedUser.id === user.id) {
      setCheckResult(false); // 중복된 경우
    } else {
      setCheckResult(true); // 사용 가능한 경우
    }
  };

  // 회원가입 처리 함수
  const handleSignup = () => {
    // 입력값이 비어있을 경우 경고
    if (!user.id || !user.pw || !user.confirmPw) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 중복 확인을 하지 않은 경우 경고
    if (checkResult !== true) {
      alert("아이디 중복 확인을 완료해주세요.");
      return;
    }

    // 비밀번호 유효성 검사 실패 시
    if (!isPasswordValid(user.pw)) {
      setPwValid(false);
      alert("비밀번호 조건을 만족하지 않습니다.");
      return;
    } else {
      setPwValid(true);
    }

    // 비밀번호 불일치 시
    if (user.pw !== user.confirmPw) {
      setPwMatch(false);
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 모든 조건이 통과되면 localStorage에 사용자 정보 저장
    setPwMatch(true);
    localStorage.setItem("user", JSON.stringify({ id: user.id, pw: user.pw }));
    alert("회원가입 성공!");

    // 로그인 페이지로 이동
    navigate("/login");
  };

  return (
    // 전체 폼을 감싸는 컨테이너
    <div className="signup-container">
      <div className="signup-card">
        <h2>회원가입</h2>

        {/* 아이디 입력 필드 + 중복 확인 버튼 */}
        <div className="form-group-row">
          <input
            type="text"
            placeholder="아이디"
            value={user.id}
            onChange={(e) => {
              setUser({ ...user, id: e.target.value }); // id 상태 업데이트
              setCheckResult(null); // 중복 확인 결과 초기화
            }}
          />
          <button onClick={handleCheckDuplicate}>중복 확인</button>
        </div>

        {/* 중복 확인 결과 메시지 */}
        {checkResult === true && (
          <div className="msg success">✅ 아이디로 사용할 수 있습니다</div>
        )}
        {checkResult === false && (
          <div className="msg error">❌ 해당 아이디는 사용할 수 없습니다</div>
        )}

        {/* 비밀번호 조건 안내 메시지 */}
        <div className="guide-msg">
          ※ 비밀번호는 8자 이상, 영문자, 숫자, 특수문자를 포함해야 합니다.
        </div>

        {/* 비밀번호 입력 필드 */}
        <input
          type="password"
          placeholder="비밀번호"
          value={user.pw}
          onChange={(e) => {
            setUser({ ...user, pw: e.target.value }); // pw 상태 업데이트
            setPwValid(null); // 유효성 결과 초기화
          }}
        />
        {/* 비밀번호 조건 불일치 메시지 */}
        {pwValid === false && (
          <div className="msg error">❌ 비밀번호 조건을 만족하지 않습니다</div>
        )}

        {/* 비밀번호 확인 입력 필드 */}
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={user.confirmPw}
          onChange={(e) => {
            setUser({ ...user, confirmPw: e.target.value }); // confirmPw 상태 업데이트
            setPwMatch(null); // 비밀번호 일치 상태 초기화
          }}
        />
        {/* 비밀번호 불일치 메시지 */}
        {pwMatch === false && (
          <div className="msg error">❌ 비밀번호가 일치하지 않습니다</div>
        )}

        {/* 가입 버튼 */}
        <div className="btn-wrap">
          <button className="submit-btn" onClick={handleSignup}>
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

// SignupForm 컴포넌트를 외부에서 사용할 수 있도록 export
export default SignupForm;
