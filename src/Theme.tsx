import React, { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className={`root ${theme}`}>
      <h1>Hello World!!</h1>
      <button onClick={handleToggle} >Toggle Theme</button>
    </div>
  );
}

export default App;
