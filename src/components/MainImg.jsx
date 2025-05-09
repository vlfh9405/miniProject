import logo from "../img/Preview.png"
import img1 from "../img/flower_small1.jpg";
import img2 from "../img/flower_small2.jpg";
import img3 from "../img/flower_small3.jpg";
import "../css/MainImg.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


const MainImg = () => {

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    arrows: true,
    
  }
  return(
    <Slider {...settings} className="MainImg">
      <div>
        <img src={logo}/>
      </div>
      <div>
      <img src={img1}/>
      </div>
      <div>
      <img src={img2}/>
      </div>
      <div>
      <img src={img3}/>
      </div>
    </Slider>
  )
}
export default MainImg;