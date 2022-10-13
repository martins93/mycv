import React from "react";
import { useDarkMode } from "../hooks/darkModeContext";
import { useLocation } from "react-router-dom";
export default function Details() {
  const location = useLocation();
  const { isDarkMode } = useDarkMode();

  console.log(location.state);
  return (
    <div className={`containerPage ${isDarkMode && "darkModeActive"}`}></div>
  );
}
