import React from "react";
import "./style.css";
import ButtonComponent from "../button";
import { contact } from "../../Utils/utils";
import { useDarkMode } from "../../hooks/darkModeContext";

export default function Footer() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const functionOnClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`footer ${isDarkMode && "darkerModeActive"}`}>
      <ButtonComponent
        functionOnClick={functionOnClick}
        className={`fa fa-${isDarkMode ? "sun-o" : "moon-o"}`}
        title={isDarkMode ? "Activate Light Mode" : "Activate Dark Mode"}
      />
      <div className="infoFooter">
        <h6>HOW TO REACH ME</h6>
        <div className="infoContacts">
          {contact.map((data, index) => {
            return (
              <div className="contacts" key={index}>
                <i
                  className={`fa fa-${data.icon} iconsContact ${
                    isDarkMode && "darkModeColor"
                  }`}
                >
                  :
                </i>
                <span>{data.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
