import axios from "axios";

import { useCallback, useContext, useEffect, useState } from "react";

import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../Context";

import "./LoginMain.css";

import { auth } from "../firebase";

import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import alerticon from "../../image/alerticon.svg";
function LoginMainPage() {
  const { setIsLogged } = useContext(AppContext);
  const [empData, setEmpData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const Login = () => {
    let isValid = false;
    signInWithEmailAndPassword(auth, userName, password)
      .then((userCredentials) => {
        console.log(userCredentials, "testtest");
        isValid = true;
        setIsLogged(true);
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoginError(true);
      });
  };
  useEffect(() => {
    setIsLogged(false);
  }, []);

  return (
    <div className="loginmainpage">
      <div className="mainlogintext">
        <label>
          <italic>AIME-NEW</italic>
        </label>
      </div>
      <div className="loginmainpopup">
        <div>
          <label>
            <italic> Login In </italic>
          </label>
        </div>
        <div className="usercontainer">
          <div className="username">Username/E-Mail</div>
          <div className="inputfield">
            <input
              type="text"
              name="username"
              className="inputfield1"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="password">Password</div>
          <div className="inputfield">
            <input
              type="password"
              name="password"
              className="inputfield1"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <Button
              type="submit"
              className="login"
              onClick={() => {
                Login();
              }}
            >
              Login
            </Button>
          </div>
          {loginError == true && (
            <div className="maxfileerrormsg">
              <img src={alerticon} width="24px" height="24px" />
              <span className="uploaderrortxt" style={{ fontSize: "16px" }}>
                Invalid Login Credentials
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginMainPage;
