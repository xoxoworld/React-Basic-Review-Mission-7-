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
      <h1 className="main-title">React Basic Review Mission 2</h1>
      
      {/* 미션 1. 화면에는 전체 데이터 개수를 출력 */}
      <p className="total-count">전체 학습 항목 수: {reactData.length}개</p>

      {/* 미션 2. 컴포넌트로 데이터 전달하기 */}
      <section className="section">
        <h2 className="section-title">첫 번째 데이터 출력</h2>
        {firstData && (
          <StudyInfo
            title={firstData.title}
            desc={firstData.desc}
            category={firstData.category}
          />
        )}
      </section>

      {/* 미션 5. 카테고리 필터 버튼 */}
      <section className="section">
        <h2 className="section-title">카테고리 필터</h2>
        <div className="filter-container">
          <button onClick={() => setCategory("all")}>전체</button>
          <button onClick={() => setCategory("concept")}>concept</button>
          <button onClick={() => setCategory("library")}>library</button>
          <button onClick={() => setCategory("hook")}>hook</button>
        </div>
      </section>

      {/* 추가 도전 과제. 검색 input */}
      <section className="section">
        <h2 className="section-title">검색</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="제목 검색"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </section>

      {/* 미션 3 & 4. StudyList 컴포넌트 출력 */}
      <section className="section">
        <h2 className="section-title">학습 목록</h2>
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
