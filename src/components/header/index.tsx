import React from "react";
import "./style.css";
import Profile from "../../assets/images/profile.jpg";
import ButtonComponent from "../button";
import { useDarkMode } from "../../hooks/darkModeContext";
import { useNavigate } from "react-router-dom";
import SLUGS from "../../resources/slugs";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const functionOnClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const getBack = () => {
    navigate(SLUGS.home);
  };

  return (
    <div className="Header">
      <div className={`blueSide ${isDarkMode && "darkerModeActive"}`}>
        <ButtonComponent
          functionOnClick={functionOnClick}
          className={`fa fa-${isDarkMode ? "sun-o" : "moon-o"}`}
          title={isDarkMode ? "Activate Light Mode" : "Activate Dark Mode"}
        />
        {location.pathname === SLUGS.details && (
          <ButtonComponent
            functionOnClick={getBack}
            className={"fa fa-arrow-left"}
            title={"Go to home"}
          />
        )}
      </div>
      <div className={`whiteSide ${isDarkMode && "darkModeActive"}`}></div>
      <div className="info">
        <div className="photo">
          <div className="photoWrapper">
            <img src={Profile} className="responsiveImg"></img>
          </div>
        </div>
        <div className={`name ${isDarkMode && "darkModeColor"}`}>
          <h1>Pedro Martins</h1>
          <p className={`description ${isDarkMode && "darkModeColor"}`}>
            SOFTWARE DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
}
