import "../css/HomeItemList.css";
import HomeItem from "./HomeItem";
import { useState } from "react";

const HomeItemList = ({product}) => {
  const [search, setSearch] = useState("");


  const getSearchResult = () => {
    if (search === "") return product;
    return product.filter((item) =>
      item.pdName.toLowerCase().includes(search.toLowerCase())
    );
  };


  const filteredProducts = getSearchResult();

  return(
    <div className="HomeItemList">
      <div className="homeSearch">
        <div className="homeText">
            <span>상품목록</span>
        </div>

        <div className="searchBox">
            <span>검색 : </span>
            <input onKeyDown = {(e) => { if (e.key === 'Enter') {
                    setSearch(e.target.value);
                  }}}type="text" placeholder="입력하세요"/>
        </div>
      </div>

      <div className="item">
        {filteredProducts.map((item)=>(
          <HomeItem {...item} key={item.id}/>
        ))}
     </div>
    
    </div>
  )
}
export default HomeItemList;