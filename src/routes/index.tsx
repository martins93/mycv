import React from "react";
import Home from "../pages/home";
import { Navigate, Routes, Route } from "react-router-dom";
import SLUGS from "../resources/slugs";
import Details from "../pages/details";
export default function PublicRoutes() {
  return (
    <Routes>
      <Route path={SLUGS.home} element={<Home />} />
      <Route path={SLUGS.details} element={<Details />} />
      <Route path="/" element={<Navigate to={SLUGS.home} />} />
      <Route path="*" element={<Navigate to={SLUGS.home} />} />
    </Routes>
  );
}
