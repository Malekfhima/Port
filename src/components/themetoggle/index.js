import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "light";
};

const Themetoggle = () => {
  const [theme, settheme] = useState(getInitialTheme());
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    // Appliquer le thème au chargement de la page
    document.documentElement.setAttribute("data-theme", theme);
  });
  return (
    <div className="nav_ac" onClick={themetoggle} title="Changer le thème">
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
