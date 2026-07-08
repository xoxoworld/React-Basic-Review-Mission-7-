import React from "react";

export default function StudyList({ items, selectedId, onSelect }) {
  return (
    <div className="study-list">
      {items.map((item) => {
        const isActive = item.id === selectedId;
        return (
          <div
            key={item.id}
            className={`study-item ${isActive ? "active" : ""}`}
            onClick={() => onSelect(item.id)}
          >
            <h3 className="item-title">
              {item.id}. {item.title}
            </h3>
            {isActive && <p className="selected-message">선택된 항목입니다.</p>}
            <p className="item-desc">{item.desc}</p>
            <p className="item-category">분류: {item.category}</p>
          </div>
        );
      })}
    </div>
  );
}
