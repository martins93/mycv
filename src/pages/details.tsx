import React from "react";
import { useDarkMode } from "../hooks/darkModeContext";
import { useLocation } from "react-router-dom";
import "./style.css";
import ListDetails from "../components/listDetails";
import { experience } from "../interface/workExperience";
export default function Details() {
  const location = useLocation();
  const { isDarkMode } = useDarkMode();

  const objExperience: experience = location.state.state;
  return (
    <div className={`containerPage ${isDarkMode && "darkModeActive"}`}>
      <div className="containerWrapper">
        <div className="skillsWrapper">
          <h3
            className={`titleSkills centerItems ${
              isDarkMode && "darkModeColor"
            }`}
          >
            Details
          </h3>
          <ListDetails objExperience={objExperience} />
        </div>
        <div className="experienceWrapper">
          <div className="work">
            <h3 className={`titleSkills ${isDarkMode && "darkModeColor"}`}>
              About
            </h3>
            <div className="aboutSection">
              <span>{objExperience.about}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
