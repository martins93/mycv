import React from "react";
import { useDarkMode } from "../hooks/darkModeContext";
import Skills from "../components/skillsComponent";
import {
  codingLanguages,
  frameworks,
  workExperience,
  educationalExperience,
} from "../Utils/utils";
import "./style.css";
import DetailsComponent from "../components/detailsComponent";
import { useNavigate } from "react-router-dom";
import SLUGS from "../resources/slugs";
import { experience } from "../interface/workExperience";
export default function Home() {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const seeDetails = (state: experience) => {
    navigate(SLUGS.details, { state: { state } });
  };
  return (
    <div className={`containerPage ${isDarkMode && "darkModeActive"}`}>
      <div className="containerWrapper">
        <div className="skillsWrapper">
          <h3 className={`titleSkills ${isDarkMode && "darkModeColor"}`}>
            Skills
          </h3>
          <Skills skills={codingLanguages} title="Coding Languages" />
          <Skills skills={frameworks} title="Frameworks" />
        </div>
        <div className="experienceWrapper">
          <div className="work">
            <DetailsComponent
              experience={workExperience}
              functionGoTo={seeDetails}
            />
          </div>
          <div className="work">
            <h3 className={`titleSkills ${isDarkMode && "darkModeColor"}`}>
              Educational Background
            </h3>
            <DetailsComponent
              experience={educationalExperience}
              functionGoTo={seeDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
