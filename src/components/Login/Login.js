import { useContext, useEffect, useState } from "react";
import "./Login.css";
import usericon from "../../image/lock-solid.svg";
import check from "../../image/circle-check-solid.svg";
import { AppContext } from "../Context";
import { useNavigate } from "react-router-dom";

function Login() {
  const { themeName, setIsLogged } = useContext(AppContext);
  const navigate = useNavigate("");
  useEffect(() => {
    setIsLogged(true);
  }, []);

  return (
    <div>
      <div className={`row ${themeName === "dark" && "dark"}`}>
        <div className="loginpage col-lg-6">
          <div
            className={`login-container ${themeName === "dark" && "darkcard"}`}
          >
            <div className="usericon">
              <img src={usericon} height="40" width="40" />
            </div>
            <div className="signmain">
              <label className="signin">Sign in</label>
            </div>
            <div>
              <div className="loginmain">
                <button
                  onClick={() => navigate("/login")}
                  className={`${
                    themeName === "dark" ? "darkloginbutton" : "loginuser"
                  }`}
                >
                  LOGIN FOR REGISTERED USERS
                </button>
              </div>
              <div className="guestmain">
                <button
                  href="/guestlogin"
                  className={`${
                    themeName === "dark" ? "darkguestbutton" : "guestuser"
                  }`}
                >
                  LOGIN FOR GUEST USERS
                </button>
              </div>
              <div className="termsandcontact">
                <a className="termsandcondition">Terms & Conditions</a>
                <a className="helpandcontact">Help & Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="loginpage col-lg-6">
          <div
            className={`login-container ${themeName === "dark" && "darkcard"}`}
          >
            <img></img>
            <div
              className={`${themeName === "dark" ? "darkmaintx" : "signmain1"}`}
            >
              <label className="signin">Why Register?</label>
            </div>
            <div className={`${themeName === "dark" && "darkmaintxt"}`}>
              <div className="loginmain1">
                <div className="bullet-points d-flex">
                  <div className="checkmark">
                    <img src={check} height="24" width="24" />
                  </div>
                  <div>
                    <label>View and edit policy</label>
                  </div>
                </div>
                <div className="bullet-points d-flex">
                  <div className="checkmark">
                    <img src={check} height="24" width="24" />
                  </div>
                  <div>
                    <label>AI enabled Underwriting</label>
                  </div>
                </div>
                <div className="bullet-points d-flex">
                  <div className="checkmark">
                    <img src={check} height="24" width="24" />
                  </div>
                  <div>
                    <label>Be updated about claims</label>
                  </div>
                </div>
                <div className="bullet-points d-flex">
                  <div className="checkmark">
                    <img src={check} height="24" width="24" />
                  </div>
                  <div>
                    <label>Print your certificates</label>
                  </div>
                </div>
              </div>
              <div className="textcontainer">
                <div>
                  <label style={{ padding: "10px" }}>
                    Hey! Noe you can purchase insurance on the go. Try our
                    latest mobile application
                  </label>
                </div>
                <hr />
                <div>
                  <div className="platform">
                    <label>
                      <strong>Select platform</strong>
                    </label>
                  </div>
                  <div className="d-flex">
                    <button
                      className={`${
                        themeName === "dark" ? "darkphonebutton" : "button"
                      }`}
                    >
                      <strong>Android</strong>
                    </button>
                    <button
                      className={`${
                        themeName === "dark" ? "darkphonebutton" : "button"
                      }`}
                    >
                      <strong>ios</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
