import "../css/HomeItem.css"
import { Link } from "react-router-dom";
const HomeItem = ({...product}) => {
  return(
     <>
     <Link to={`/product/detail/${product.id}`} className="link">
    <div className="HomeItem">
        <div className="imgBox">
          <img src = {product.image}/>
        </div>

        <div className="textBox">
          <div className="productName">{product.pdName}</div>
          <div className="productPrice">{product.price.toLocaleString('ko-KR')}원</div>
        </div>
    </div>
    </Link>
     </>
  
  )
}
export default HomeItem;