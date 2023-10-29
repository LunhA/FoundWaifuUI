import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "./../components/AppFooter";

function SearchResults() {
  return (
    <div className="home-page">
      <AppHeader />
      <div className="home-container">
        <div className="search-container">
          <div className="div70">
            <span>Kết quả tìm kiếm cho: {"Alice"}</span>
            <div className="Search-content-container">
              <div className="character-search-banner">
                <img
                  className="character-img"
                  src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
                  alt=""
                ></img>
                <div>
                <span className="character-name">Alice Lendrott</span>
                <span className="character-movies-title">Shinigami bocchan to kuro maid</span>
                <span className="character-type">INFJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default SearchResults;
