import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDarkMode } from "../../hooks/darkModeContext";
import { tasks } from "../../interface/workExperience";

export default function ListDetails({ objExperience }) {
  const { isDarkMode } = useDarkMode();

  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date(objExperience.startDate);

    let timeLeft = {};

    if (difference > 0) {
      const msPerDay = 24 * 60 * 60 * 1000;
      const e_days_left = difference / msPerDay;
      const daysLeft = Math.floor(e_days_left);
      const yearsLeft = Math.floor(daysLeft / 365);
      const e_hrsLeft = (e_days_left - daysLeft) * 24;
      const hrsLeft = Math.floor(e_hrsLeft);
      const minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
      timeLeft = {
        years: yearsLeft,
        hours: hrsLeft,
        minutes: minsLeft,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
  console.log(timeLeft);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div
      className="listDetails
  "
    >
      <div className="expDetails">
        <div className="iconWrapper">
          <i className="fa fa-keyboard-o" aria-hidden="true" title="role"></i>
        </div>

        <span>{objExperience.role}</span>
      </div>
      <div className="expDetails">
        <div className="iconWrapper">
          <i
            className="fa fa-building-o"
            aria-hidden="true"
            title="company"
          ></i>
        </div>
        <div className="expWrapper">
          <span>{objExperience.company}</span>
        </div>
      </div>
      <div className="expDetails">
        <>
          <div className="iconWrapper">
            <i
              className="fa fa-clock-o"
              aria-hidden="true"
              title="Started at"
            ></i>
          </div>
          <div className="expWrapper">
            <span>{timeLeft.years} Years,</span>
            <span>{timeLeft.hours} Hours and </span>
            <span>{timeLeft.minutes} minutes</span>
          </div>
        </>
      </div>
      <br />
      <h4 className={`titleSkills ${isDarkMode && "darkModeColor"}`}>Tasks</h4>
      {objExperience.tasks.map((exp: tasks, index: number) => {
        return (
          <ul>
            <li style={{ padding: "5px 10px", fontSize: "1.4rem" }} key={index}>
              {exp.task}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

ListDetails.propTypes = {
  objExperience: PropTypes.object,
};
