import React from "react";

export default function StudyList({ items, selectedId, onSelect }) {
  return (
    <ul className="study-list">
      {items.map((item) => {
        const isActive = item.id === selectedId;
        return (
          <li
            key={item.id}
            className={`study-item ${isActive ? "active" : ""}`}
            onClick={() => onSelect(item.id)}
            style={{ cursor: "pointer" }}
          >
            <h3>{item.title}</h3>
            {isActive && <p className="selected-message">선택된 항목입니다.</p>}
            <p>ID: {item.id}</p>
            <p>설명: {item.desc}</p>
          </li>
        );
      })}
    </ul>
  );
}
