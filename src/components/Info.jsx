import React, { useState, useEffect} from "react";
import "./info.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineStyle } from "react-icons/md";

const Info = () => {
  const [theme, setTheme] = useState("light")

  const toggleThemeDark = () =>
  {
    if(theme !== "dark") setTheme("dark");
    else setTheme("light");
  }
  const toggleThemeColored = () =>
  {
    if(theme !== "colored") setTheme("colored");
    else setTheme("light");
  }

  useEffect(()=>{document.body.className=theme},[theme])

  return (
    <div className="info">
      <div className="user">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt=""
          height="80px"
          width="80px"
        />
        <span>Welcome User</span>
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
      <span><MdOutlineStyle/>     Themes: </span>
      <button onClick={toggleThemeDark} className="black butn"></button>
      <button onClick={toggleThemeColored} className="color butn"></button>
      </div>

    </div>
  );
};

export default Info;
