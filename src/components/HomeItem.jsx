import "../css/HomeItem.css"
const HomeItem = ({img,productName,productPrice}) => {
  return(
    <div className="HomeItem">
        <div className="imgBox">
          <img src = {img}/>
        </div>

        <div className="textBox">
          <div className="productName">{productName}</div>
          <div className="productPrice">{productPrice}</div>
        </div>
    </div>
  )
}
export default HomeItem;