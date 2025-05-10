import {Routes, Route} from "react-router-dom"
import './App.css';
import MainPage from "./components/MaiaPage";
import Login from "./components/Login";
import Home from "./components/Home";
import Product from "./components/Product";
import Notice from "./components/Notice";
import SignUp from "./components/SignUp";



function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path="/" element={<MainPage/>}>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/product" element = {<Product/>}/>
        <Route path="/notice" element = {<Notice/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
   </div>
  )
}

export default App
