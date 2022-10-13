import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import PublicRoutes from "./routes";
import { DarkMode } from "./hooks/darkModeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div className="wrapper">
      <DarkMode.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Header />
        <PublicRoutes />
        <Footer />
      </DarkMode.Provider>
    </div>
  );
}

export default App;
