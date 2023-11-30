import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import AppHeader from "./../components/AppHeader";
import AppFooter from "./../components/AppFooter";
import { getCharacterByIdApi, getCharacterByAnimeIdApi } from "../api/recommendation.api";


export default function CharacterDetails() {
  const history = useNavigate();
  const { characterId } = useParams();
  const [characterDetail, setcharacterDetail] = useState([]);
  const [relatedList, setRelatedList] = useState([]);
  const [isLoved, setIsLoved] = useState(false);

  const toggleLove = () => {
    setIsLoved(!isLoved);
  };

  const loveIconClasses = classNames("fa", {
    "fa-heart": isLoved,
    "fa-heart-o": !isLoved,
  });

  const handleBackBtn = () => {
    window.history.back();
  };

  useEffect(() => {
    getCharacterByIdApi(characterId).then((res) => setcharacterDetail(res));
  },[characterDetail]);
  console.log(characterDetail);

  const renderRelatedCharacters = () => {
    return relatedList.map
  };

  return (
    <div className="home-page">
      <AppHeader />
      <div className="character-details-container">
        <div className="character-detail-container">
          <button className="back-button" onClick={handleBackBtn}>
            Back
          </button>
          <div className="character-package">
            <div className="character-detail-paner">
              <img
                className="character--img"
                src={characterDetail.profileImageUrl}
              ></img>
            </div>
            <div className="character-detail-data">
              <div
                style={{
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="character-detail-name">{characterDetail.name}</span>
                <div className="character-detail-liked">
                  <i
                    className={loveIconClasses}
                    style={{
                      width: 40 + "px",
                      height: 40 + "px",
                      // color: "palevioletred",
                      color: "#F875AA",
                      fontSize: 30 + "px",
                    }}
                    onClick={toggleLove}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="character-detail-anime">
                  Anime: Shinigami Bocchan to Kuro Maid
                </div>
                {/* <i
                  className="fa fa-forward"
                  onClick={{}}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: 40 + "px",
                    height: 40 + "px",
                    color: "#fff",
                    fontSize: 25 + "px",
                  }}
                ></i> */}
              </div>
              <span className="character-detail-type"> MBTI type: {characterDetail.personalityType} </span>
            </div>
          </div>
          <div className="related-character-container">
            <span className="related-title">
              Các nhân vật có liên quan:
            </span>
            <div className="related-character-content">
              <div className="related-character-profile">
                <img
                  className="character-img"
                  src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
                  alt=""
                ></img>
                <div className="related-character-info-container">
                  <span className="related-character-name">Alice Lendrott</span>
                  <span className="related-character-type">INFJ</span>
                </div>
              </div>
              <div className="related-character-profile">
                <img
                  className="character-img"
                  src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
                  alt=""
                ></img>
                <div className="related-character-info-container">
                  <span className="related-character-name">Alice Lendrott</span>
                  <span className="related-character-type">INFJ</span>
                </div>
              </div>
              <div className="related-character-profile">
                <img
                  className="character-img"
                  src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
                  alt=""
                ></img>
                <div className="related-character-info-container">
                  <span className="related-character-name">Alice Lendrott</span>
                  <span className="related-character-type">INFJ</span>
                </div>
              </div>
              <div className="related-character-profile">
                <img
                  className="character-img"
                  src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
                  alt=""
                ></img>
                <div className="related-character-info-container">
                  <span className="related-character-name">Alice Lendrott</span>
                  <span className="related-character-type">INFJ</span>
                </div>
              </div>
              <div className="related-character-profile">
                <img
                  className="character-img"
                  src="https://i.pinimg.com/1200x/96/33/74/9633748aa363ddf4ad5fdf5fd3378c1e.jpg"
                  alt=""
                ></img>
                <div className="related-character-info-container">
                  <span className="related-character-name">Alice Lendrott</span>
                  <span className="related-character-type">INFJ</span>
                </div>
              </div>
            </div>
            <span className="related-title">
              Các nhân vật trong cùng anime:
            </span>
            <div className="related-character-content">
              
            </div>

          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
