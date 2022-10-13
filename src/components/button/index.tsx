import React from "react";
import { buttonInterface } from "../../interface/button";
import "./style.css";

export default function ButtonComponent({
  className,
  functionOnClick,
  title,
}: buttonInterface) {
  return (
    <div className="buttonWithDarkMode">
      <button className="btnDark" onClick={() => functionOnClick()}>
        <i className={className} title={title} aria-hidden="true"></i>
      </button>
    </div>
  );
}
