import React, { useRef, useState } from "react";
import "./CheckBox.css";
import CheckSvg from "../../../public/CheckSvg";

export default function CheckBox({ label, checked, onchange }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const divRef = useRef(null);

  const handleCheckboxChange = () => {
    if (onChange) {
      onсhange();
    }
  };

  return (
    <label
      className="checkbox-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {label}
      <input type="checkbox" checked={checked} onChange={onchange} />
      <div
        ref={divRef}
        onClick={handleCheckboxChange}
        className={`input-wrapper ${checked ? "checked" : ""} ${
          isHovered ? (checked ? "checked-hover" : "input-wrapper-hover") : ""
        } ${
          isActive ? (checked ? "checked-active" : "input-wrapper-active") : ""
        }`}
      >
        {(checked || isHovered) && <CheckSvg />}
      </div>
    </label>
  );
}
