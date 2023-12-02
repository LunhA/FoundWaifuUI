import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AppHeader/css/style.css";
import { useState } from "react";
import { searchBarApi } from "../api/recommendation.api";

function AppHeader() {
  const history = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      // history(`/searchresults/${inputValue}`);
      history(`/searchresults`);
    }
  };

  const handleAccountClick = () => {
    if (isLogin != false){
      history(`/account`)
    } else history(`/login`);
  }

  const handleLikedClick = () => {
    history(`/liked`);
  }

  return (
    <section class="ftco-section">
      <div class="container-fluid px-md-5">
        <div class="row justify-content-between">
          <div class="col-md-8 order-md-last">
            <div class="row">
              <div class="col-md-6 text-center">
                <Link class="navbar-brand text-white" to="/home/">
                  FOUNDCHARACTER
                  <span class="text-white">Base on MBTI's system</span>
                </Link>
              </div>

              <div class="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                <form action="#" class="searchform order-lg-last">
                  <div class="form-group d-flex">
                    <input
                      type="text"
                      class="form-control pl-3"
                      placeholder="Peoples, Characters, Anime,..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                      type="submit"
                      placeholder=""
                      onClick={handleSearch}
                      class="form-control search"
                    >
                      <span class="fa fa-search"></span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="social-media">
              <p class="mb-0 d-flex">
                <a
                  href="#"
                  class="d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-facebook">
                    <i class="sr-only">Facebook</i>
                  </span>
                </a>
                <a
                  href="#"
                  class="d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-twitter">
                    <i class="sr-only">Twitter</i>
                  </span>
                </a>
                <a
                  href="#"
                  class="d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-instagram">
                    <i class="sr-only">Instagram</i>
                  </span>
                </a>
                <a
                  href="#"
                  class="d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-dribbble">
                    <i class="sr-only">Dribbble</i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span> Menu
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav m-auto">
              <li class="nav-item active">
                <Link to="/home" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Personality
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <a class="dropdown-item" href="#">
                    ISTJ
                  </a>
                  <a class="dropdown-item" href="#">
                    ISFJ
                  </a>
                  <a class="dropdown-item" href="#">
                    INFJ
                  </a>
                  <a class="dropdown-item" href="#">
                    INTJ
                  </a>
                  <a class="dropdown-item" href="#">
                    ISTP
                  </a>
                  <a class="dropdown-item" href="#">
                    ISFP
                  </a>
                  <a class="dropdown-item" href="#">
                    INFP
                  </a>
                  <a class="dropdown-item" href="#">
                    INTP
                  </a>
                  <a class="dropdown-item" href="#">
                    ESTP
                  </a>
                  <a class="dropdown-item" href="#">
                    ESFP
                  </a>
                  <a class="dropdown-item" href="#">
                    ENFP
                  </a>
                  <a class="dropdown-item" href="#">
                    ENTP
                  </a>
                  <a class="dropdown-item" href="#">
                    ESTJ
                  </a>
                  <a class="dropdown-item" href="#">
                    ESFJ
                  </a>
                  <a class="dropdown-item" href="#">
                    ENFJ
                  </a>
                  <a class="dropdown-item" href="#">
                    ENTJ
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Fictional
                </a>
              </li>
              <li class="nav-item" onClick={handleLikedClick}>
                <a class="nav-link">
                  Liked
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item" onClick={handleAccountClick}>
                <p  class="nav-link">
                  Account
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default AppHeader;
