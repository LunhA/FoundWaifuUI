import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./../components/AppHeader";
import AppFooter from "./../components/AppFooter";

export default function Home() {
  const history = useNavigate();
  const [characterList, setCharacterList] = useState([]);


  return (
    <div className="home-page">
      <AppHeader />
      <div className="home-container">
        <span className="Characters-container-title">
          Các nhân vật bạn đã chọn:{" "}
        </span>
        <div className="characters-container" id="Inputed-characters-container">
          <div className="character-profile">
            <img
              className="character-img"
              src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
              alt=""
            ></img>
            <span className="character-name">Alice Lendrott</span>
            <span className="character-type">INFJ</span>
          </div>
          <div className="character-profile">
            <img
              className="character-img"
              src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
              alt=""
            ></img>
            <span className="character-name">Alice Lendrott</span>
            <span className="character-type">INFJ</span>
          </div>
          <div className="character-profile">
            <img
              className="character-img"
              src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
              alt=""
            ></img>
            <span className="character-name">Alice Lendrott</span>
            <span className="character-type">INFJ</span>
          </div>
          <div className="character-profile">
            <img
              className="character-img"
              src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
              alt=""
            ></img>
            <span className="character-name">Alice Lendrott</span>
            <span className="character-type">INFJ</span>
          </div>
        </div>
        <span className="Characters-container-title">
          Đề xuất dựa theo lựa chọn của bạn:{" "}
        </span>
        <div
          className="Characters-container"
          id="Suggested-characters-container"
        >
          
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
