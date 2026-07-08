import React, { useState } from "react";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import StudyList from "./components/StudyList";
import "./App.css";

// 미션 1. console.log()로 데이터 확인
console.log(reactData);

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");

  // 카테고리 필터와 검색 기능이 함께 동작하도록 구현
  const filteredItems = reactData.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;
    const matchesKeyword = item.title.toLowerCase().includes(keyword.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  // data.json의 첫 번째 데이터
  const firstData = reactData[0];

  return (
    <div className="app">
      <h1>React Basic Review Mission 2</h1>
      
      {/* 미션 1. 화면에는 전체 데이터 개수를 출력 */}
      <div className="total-count">
        전체 데이터 개수: {reactData.length}개
      </div>

      <hr />

      {/* 미션 2. 컴포넌트로 데이터 전달하기 */}
      <section>
        <h2>미션 2. 첫 번째 데이터 출력 (StudyInfo 컴포넌트)</h2>
        {firstData && (
          <StudyInfo
            title={firstData.title}
            desc={firstData.desc}
            category={firstData.category}
          />
        )}
      </section>

      <hr />

      {/* 미션 5 & 추가 도전 과제. 카테고리 필터 및 검색 */}
      <section>
        <h2>미션 3-5 & 추가 도전 과제. 데이터 목록</h2>
        
        <div className="controls">
          {/* 추가 도전 과제. 검색 input */}
          <div className="search-container">
            <label htmlFor="search">검색: </label>
            <input
              id="search"
              type="text"
              placeholder="제목 검색"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          {/* 미션 5. 카테고리 필터 버튼 */}
          <div className="filter-container">
            <button onClick={() => setCategory("all")}>전체</button>
            <button onClick={() => setCategory("concept")}>concept</button>
            <button onClick={() => setCategory("library")}>library</button>
            <button onClick={() => setCategory("hook")}>hook</button>
          </div>
        </div>

        {/* 미션 3 & 4. StudyList 컴포넌트 출력 */}
        <StudyList
          items={filteredItems}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </section>
    </div>
  );
}

export default App;
