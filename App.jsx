import './css/App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MypageInfo from './Component/MypageInfo';
import MypageMenuBar from './Component/MypageMenuBar';
import NoticeList from './Component/NoticeList';
import NoticeDetail from './Component/NoticeDetail';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='TopBar'>
          <Link to='/menu'>마이페이지</Link>
          <Link to="/notice">공지사항</Link>
        </div>
        <div className="content" style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/info" element={<MypageInfo />} />
            <Route path="/menu" element={<MypageMenuBar/>} />
            <Route path="/notice" element={<NoticeList />} />
            <Route path="/notice/:id" element={<NoticeDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;