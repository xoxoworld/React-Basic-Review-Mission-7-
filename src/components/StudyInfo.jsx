import React from "react";

export default function StudyInfo({ title, desc, category }) {
  return (
    <div className="study-info-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
      <p className="card-category">분류: {category}</p>
    </div>
  );
}
