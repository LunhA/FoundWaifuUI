import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { authService } from '@/utils/auth-service';
import AppHeader from "./../components/AppHeader";
import AppFooter from "./../components/AppFooter";


export default function Login() {

  const history  = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const isLoggedIn = !!authService.getSession();

  useEffect(() => {
    setUser(authService.getSession());
  }, []);
  
  useEffect(() => {
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");

  signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    
  });
  loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    
  });
  signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
  });
}, []);


  const onLogout = () => {
    authService.logout();
    history.push(`/home`);
  };
  

    return(
    <div className="home-page">
        <AppHeader />
        <div className="login-container">

        <div class="wrapper">
      <div class="title-text">
        <div class="title login">Welcome</div>
        <div class="title signup">Create Account</div>
      </div>
      <div class="form-container">
        <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked></input>
          <input type="radio" name="slide" id="signup"></input>
          <label for="login" class="slide login">Login</label>
          <label for="signup" class="slide signup">Signup</label>
          <div class="slider-tab"></div>
        </div>

        <div class="form-inner">
          <form action="#" class="login">
            <div class="field">
              <input type="text" placeholder="Username" required></input>
            </div>
            <div class="field">
              <input type="password" placeholder="Password" required></input>
            </div>
            <div class="pass-link"><a href="#">Forgot password?</a></div>
            <div class="field btns">
              <div class="btn-layer"></div>
              <input type="submit" value="Login"></input>
            </div>
            <div class="signup-link">Not a member? <a href="">Signup now</a></div>
          </form>
          <form action="#" class="signup">
            <div class="field">
              <input type="text" placeholder="Username" required></input>
            </div>
            <div class="field">
              <input type="password" placeholder="Password" required></input>
            </div>
            <div class="field">
              <input type="password" placeholder="Confirm password" required></input>
            </div>
            <div class="field btns">
              <div class="btn-layer"></div>
              <input type="submit" value="Signup"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
        
        <AppFooter />
    </div>
    )
}