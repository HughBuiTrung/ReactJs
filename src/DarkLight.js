import React, { useState } from "react";
import Content from "./Content";

export default function DarkLight() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <Content theme={theme} />
    </div>
  );
}
