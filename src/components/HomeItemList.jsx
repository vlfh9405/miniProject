import "../css/HomeItemList.css";
import HomeItem from "./HomeItem";
import { useState } from "react";

const HomeItemList = ({product}) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  const getSearchResult = () => {
    return search === "" ? product : product.filter((item)=>item.productName.toLowerCase().includes(search.toLowerCase()));
  }
  return(
    <div className="HomeItemList">
      <div className="homeSearch">
        <div className="homeText">
            <span>상품목록</span>
        </div>

        <div className="searchBox">
            <span>검색 : </span>
            <input onChange={onChangeSearch} type="text" placeholder="입력하세요"/>
        </div>
      </div>

      <div className="item">
        {getSearchResult().map((item)=>(
          <HomeItem {...item} key={item.id}/>
        ))}
     </div>
    
    </div>
  )
}
export default HomeItemList;