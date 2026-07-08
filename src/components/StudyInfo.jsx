import React from "react";

export default function StudyInfo({ title, desc, category }) {
  return (
    <div className="study-info">
      <h3>제목: {title}</h3>
      <p>카테고리: {category}</p>
      <p>설명: {desc}</p>
    </div>
  );
}
