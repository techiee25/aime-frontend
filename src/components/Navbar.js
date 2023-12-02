import { useContext, useEffect, useState } from "react";

import { AppContext } from "./Context";

import mode from "../image/icons8-sun.svg";
import sunlight from "../image/icons8-sunlight.svg";

import profileicon from "../image/profile.svg";

import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { aimeLogin } from "../Services/aimeSlice";

function BasicExample() {
  const { themeName, setNewTheme } = useContext(AppContext);

  const [themeMode, setThemeMode] = useState(false);

  const [isProfile, setIsProfile] = useState(false);

  const navigate = useNavigate("");

  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.aime.value);

  useEffect(() => {
    if (themeMode) {
      setNewTheme("dark");
    } else {
      setNewTheme("light");
    }
  }, [themeMode]);

  const themechange = (e) => {
    e.preventDefault();

    setThemeMode(!themeMode);
  };

  const userProfile = () => {
    setIsProfile(!isProfile);
  };

  const isLogout = () => {
    navigate("/");
    dispatch(aimeLogin(false));
  };

  return (
    <nav className={`nav ${themeName === "dark" && "darkcard"}`}>
      <label className={"site-title"}> AIME </label>

      <ul className={themeName === "dark" ? "darkfont" : "lightfont"}>
        <li>
          <span className={`${"navbar"} ${themeName === "dark" && "navdark"}`}>
            PRODUCTS
          </span>
        </li>

        <li>
          <span className={`${"navbar"} ${themeName === "dark" && "navdark"}`}>
            CLAIMS
          </span>
        </li>

        <li>
          <span className={`${"navbar"} ${themeName === "dark" && "navdark"}`}>
            ABOUT US
          </span>
        </li>

        <li>
          <span className={`${"navbar"} ${themeName === "dark" && "navdark"}`}>
            CONTACT
          </span>
        </li>

        <li>
          <span className={`${"navbar"} ${themeName === "dark" && "navdark"}`}>
            PRODUCTS
          </span>
        </li>

        {isLogin == true && (
          <li onClick={userProfile}>
            <img
              className="userprofile"
              src={profileicon}
              height="24"
              width="24"
            ></img>
            {isProfile == true && (
              <div className="userprofiledropdown">
                <div className="ddoptions" onclick={() => isLogout()}>
                  {" "}
                  Logout{" "}
                </div>
                <div className-ddoptions anclick={() => navigate("/dashboard")}>
                  {" "}
                  DashBoard{" "}
                </div>{" "}
              </div>
            )}
          </li>
        )}
        <li className="thememode" onClick={themechange}>
          <img
            style={{ marginTop: "15px", marginBottom: "15px" }}
            src={themeName === "dark" ? sunlight : mode}
            height="24"
            width="24"
          ></img>
        </li>
      </ul>
    </nav>
  );
}

export default BasicExample;
