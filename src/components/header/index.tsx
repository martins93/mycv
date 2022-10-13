import React from "react";
import "./style.css";
import Profile from "../../assets/images/profile.jpg";
import ButtonWithDarkMode from "../button";
import { useDarkMode } from "../../hooks/darkModeContext";

export default function Header() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="Header">
      <div className={`blueSide ${isDarkMode && "darkerModeActive"}`}>
        <ButtonWithDarkMode />
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
