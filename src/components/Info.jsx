import React, { useState, useEffect } from "react";
import "./info.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineStyle } from "react-icons/md";


const Info = () => {
  const th = localStorage.getItem('theme')?localStorage.getItem('theme'):"light";
  const [theme, setTheme] = useState(th);
  const [name, setName] = useState("");

  const toggleThemeDark = () => {
    if (theme === "light" || theme === "colored") setTheme("dark");
    else setTheme("light");
  };
  const toggleThemeColored = () => {
    if (theme === "light" || theme === "dark") setTheme("colored");
    else setTheme("light");
  };
  const handleKeyDown = (event) => {
    if(event.key === 'Enter')
    {
      setName(name);
      localStorage.setItem("name", name);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
    
  }, [theme]);

  return (
    <div className="info">
      <div className="user">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt=""
          height="80px"
          width="80px"
        />
        <span>
          {!localStorage.getItem("name")?
            <input
              className="input-info"
              placeholder="Enter your Name:"
              type="text"
              onKeyDown ={handleKeyDown}
              onChange={(e) => setName(e.target.value)}
              tabIndex='0'
            />
          :"Welcome " + localStorage.getItem('name')}
        </span>
      </div>
      <hr />
      <div className="title">
        <div className="cat-icon">
          <GiHamburgerMenu />
        </div>
        <span>Categories</span>
      </div>
      <div className="tasks">
        <div>
          <span className="butn inf red"></span>
          <span className="text">Work</span>
        </div>
        <div>
          <span className="butn blue inf"></span>
          <span className="text">Personal</span>
        </div>
        <div>
          <span className="butn yellow inf"></span>
          <span className="text">Leisure</span>
        </div>
      </div>
      <div className="theme-box">
        <span>
          <MdOutlineStyle /> Themes:{" "}
        </span>
        <button onClick={toggleThemeDark} className="black butn"></button>
        <button onClick={toggleThemeColored} className="color butn"></button>
      </div>
    </div>
  );
};

export default Info;
