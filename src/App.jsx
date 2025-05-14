import {Routes, Route} from "react-router-dom"
import './App.css';
import MainPage from "./components/MaiaPage";
import { useState } from "react";
import Notice from "./components/Notice";
import SignupPage from "./components/SignupPage";
import Header from "./components/Header";
import HeaderItem from "./components/HeaderItem";
import LoginPage from "./components/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = (isSuccess) => {
    if (isSuccess) {
      setIsLoggedIn(true);
    }
  };
  return (
  <div className='App'>
    <div className="HeaderBox">
    <Header/>
    <HeaderItem isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
    </div>
  <Routes>
    <Route path="/*" element={<MainPage />}>
      <Route path="notice" element={<Notice />} />
    </Route>

    <Route path = "/login" element = {<LoginPage onLoginSuccess={handleLoginSuccess} />}/>
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
   </div>
  )
}

export default App
