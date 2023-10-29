import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import AppHeader from "../components/AppHeader";
import AppFooter from "./../components/AppFooter";

function Liked() {
  const [isLoved, setIsLoved] = useState(false);

  const toggleLove = () => {
    setIsLoved(!isLoved);
  };

  const loveIconClasses = classNames("fa", {
    "fa-heart": !isLoved,
    "fa-heart-o": isLoved,
  });

  return (
    <div className="home-page">
      <AppHeader />
      <div className="home-container">
        <div className="liked-container">
          <div className="div70">
            <span>Các nhân vật đã thích:</span>
            <div className="Liked-content-container">
              <div className="character-search-banner">
                <img
                  className="character-img"
                  src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
                  alt=""
                ></img>
                <div>
                  <span
                    className="character-name"
                    style={{ height: 28 + "px" }}
                  >
                    Alice Lendrott
                  </span>
                  <span className="character-movies-title">
                    Shinigami bocchan to kuro maid
                  </span>
                  <span className="character-type">INFJ</span>
                </div>
                <div className="character-detail-liked">
                  <i
                    className={loveIconClasses}
                    style={{
                      width: 40 + "px",
                      height: 40 + "px",
                    //   color: "palevioletred",
                      color: "#F875AA",
                      fontSize: 30 + "px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onClick={toggleLove}
                  ></i>
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

export default Liked;
