import React from "react";
import "./AccordianItem.css";

const AccordianItem = ({ num, title, text, isOpen, onToggle }) => {
  return (
    <div className="item">
      <div className={`header ${isOpen ? "active" : ""}`} onClick={onToggle}>
        <p className="number">{num}</p>
        <p className="title">{title}</p>
        <p className={`icon ${isOpen ? "rotate" : ""}`}>+</p>
      </div>
      <div className={`content-box ${isOpen ? "open" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AccordianItem;
