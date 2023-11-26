import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { authService } from '@/utils/auth-service';
import AppHeader from "./../components/AppHeader";
import AppFooter from "./../components/AppFooter";

export default function Login() {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  // const isLoggedIn = !!authService.getSession();

  useEffect(() => {
    //setUser(authService.getSession());
  }, []);

  useEffect(() => {
    // const loginText = document.querySelector(".title-text .login");
    // const loginForm = document.querySelector("form.login");
    // const loginBtn = document.querySelector("label.login");
    // const signupBtn = document.querySelector("label.signup");
    // const signupLink = document.querySelector("form .signup-link a");
    // signupBtn.onclick = () => {
    //   loginForm.style.marginLeft = "-50%";
    //   loginText.style.marginLeft = "-50%";
    // };
    // loginBtn.onclick = () => {
    //   loginForm.style.marginLeft = "0%";
    //   loginText.style.marginLeft = "0%";
    // };
    // signupLink.onclick = () => {
    //   signupBtn.click();
    //   return false;
    // };
  }, []);

  // const onLogout = () => {
  //   authService.logout();
  //   history.push(`/home`);
  // };

  return (
    <div className="home-page">
      <AppHeader />
      <div className="login-container">
        <div className="wrapper">
          <div className="title-text">
            <div className="title login">Welcome</div>
            <div className="title signup">Create Account</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" checked></input>
              <input type="radio" name="slide" id="signup"></input>
              <label htmlFor="login" className="slide login">
                Login
              </label>
              <label htmlFor="signup" className="slide signup">
                Signup
              </label>
              <div className="slider-tab"></div>
            </div>

            <div className="form-inner">
              <form action="#" className="login">
                <div className="field">
                  <input type="text" placeholder="Username" required></input>
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                  ></input>
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field btns">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login"></input>
                </div>
                <div className="signup-link">
                  Not a member? <a href="">Signup now</a>
                </div>
              </form>
              <form action="#" className="signup">
                <div className="field">
                  <input type="text" placeholder="Username" required></input>
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                  ></input>
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                  ></input>
                </div>
                <div className="field btns">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
