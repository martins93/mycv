import React from "react";
import { workExperienceProps } from "../../interface/workExperience";
import PropTypes from "prop-types";
import "./style.css";
import { useDarkMode } from "../../hooks/darkModeContext";
export default function DetailsComponent({
  experience,
  functionGoTo,
}: workExperienceProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="detailsComponent">
      {experience.map((exp, index) => {
        return (
          <div className="detailsBox" key={index}>
            <span className="spanSkills">
              <i
                className={`fa fa-keyboard-o iconsContact ${
                  isDarkMode && "darkModeColor"
                }`}
                aria-hidden="true"
                title="Role"
              ></i>
              {exp.role}
            </span>
            <span>
              <i
                className={`fa fa-building-o iconsContact ${
                  isDarkMode && "darkModeColor"
                }`}
                aria-hidden="true"
                title="Company"
              ></i>
              {exp.company}
            </span>
            <div className="seeDetails" onClick={() => functionGoTo(exp)}>
              <i className="fa fa-arrow-right" title="Ver Detalhes"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

DetailsComponent.propTypes = {
  experience: PropTypes.array,
  functionGoTo: PropTypes.func,
};
