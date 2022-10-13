import React from "react";
import { useDarkMode } from "../../hooks/darkModeContext";
import "./style.css";

export default function ButtonWithDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  return (
    <div className="buttonWithDarkMode">
      <button className="btnDark" onClick={() => setIsDarkMode(!isDarkMode)}>
        <i
          className={`fa fa-${isDarkMode ? "sun-o" : "moon-o"}`}
          title={isDarkMode ? "Activate Light Mode" : "Activate Dark Mode"}
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
}
