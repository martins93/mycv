import React, { useEffect } from "react";
import { useDarkMode } from "../hooks/darkModeContext";
import { useLocation } from "react-router-dom";
import "./style.css";
import ListDetails from "../components/listDetails";
import { experience } from "../interface/workExperience";
import { useNavigate } from "react-router-dom";
import SLUGS from "../resources/slugs";

export default function Details() {
  const location = useLocation();
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const objExperience: experience = location?.state?.state;
  useEffect(() => {
    if (location.state === null || location.state === undefined) {
      navigate(SLUGS.home);
    }
  }, []);

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
              <span>{objExperience?.about}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
