import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { SkillsProps } from "../../interface/skillsObj";
export default function Skills({ skills, title }: SkillsProps) {
  return (
    <div className="skills">
      <span className="spanSkills">{title}</span>
      {skills.map((skills, index) => {
        return (
          <div className="skillsObj" key={index}>
            <img
              src={skills.icon}
              className="responsiveImgSkills"
              alt={skills.name}
              title={skills.name}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.array,
};
