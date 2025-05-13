// React에서 useState 훅을 임포트하여 상태를 관리합니다.
import { useState } from 'react';
// 이 컴포넌트의 스타일을 위한 CSS 파일을 임포트합니다.
import '../css/SearchBar.css';

export default function SearchBar({ onSearch }) {
  // 검색어(keyword)와 카테고리(category)를 상태로 관리합니다.
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  // 폼 제출 시 검색 기능을 실행하는 함수입니다.
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 방지합니다.
    onSearch(keyword, category); // 부모 컴포넌트로 검색어와 카테고리를 전달하여 검색을 실행합니다.
  };

  // 카테고리 변경 시 호출되는 함수입니다.
  const handleCategoryChange = (e) => {
    const selected = e.target.value; // 선택된 카테고리를 가져옵니다.
    setCategory(selected); // 선택된 카테고리 상태를 업데이트합니다.
    onSearch(keyword, selected); // 검색을 실행합니다.
  };

  return (
    // 검색 바를 감싸는 div 요소입니다.
    <div className="search-bar-wrapper">
      {/* 폼 제출 시 handleSubmit 함수가 실행됩니다. */}
      <form className="search-bar-form" onSubmit={handleSubmit}>
        {/* 검색어 입력 필드입니다. */}
        <input
          type="text" // 텍스트 입력 필드입니다.
          value={keyword} // 현재 검색어 상태를 입력 필드의 값으로 설정합니다.
          onChange={(e) => setKeyword(e.target.value)} // 검색어가 변경될 때마다 상태를 업데이트합니다.
          placeholder="상품명을 입력하세요" // 입력 필드에 기본적으로 표시될 텍스트입니다.
          className="search-bar-input" // 입력 필드에 적용될 CSS 클래스입니다.
        />

        {/* 카테고리 선택 드롭다운입니다. */}
        <select
          value={category} // 현재 선택된 카테고리를 드롭다운의 값으로 설정합니다.
          onChange={handleCategoryChange} // 카테고리 선택이 변경될 때마다 상태를 업데이트하고 검색을 실행합니다.
          className="search-bar-select" // 드롭다운에 적용될 CSS 클래스입니다.
        >
          {/* 카테고리 선택 옵션 */}
          <option value="">전체 카테고리</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="아우터">아우터</option>
        </select>

        {/* 검색 버튼입니다. */}
        <button type="submit" className="search-bar-button">
          검색
        </button>
      </form>
    </div>
  );
}
