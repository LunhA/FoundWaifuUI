import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import AppHeader from "./../components/AppHeader";
import AppFooter from "./../components/AppFooter";
import {
  getCharacterByIdApi,
  getMutualCharacterApi,
  getCharacterByAnimeIdApi,
} from "../api/recommendation.api";

export default function CharacterDetails() {
  const history = useNavigate();
  const { characterId } = useParams();
  const [characterDetail, setcharacterDetail] = useState([]);
  const [relatedList, setRelatedList] = useState([]);
  const [sameAnimeList, setSameAnimeList] = useState([]);
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
  }, [characterId]);
  console.log(characterDetail);

  useEffect(() => {
    if (characterDetail != []) {
      getCharacterByAnimeIdApi(characterDetail.animeId).then((res) =>
      setSameAnimeList(res)
      );
      getMutualCharacterApi(characterDetail.personalityType).then((res) =>
      setRelatedList(res)
      );
      console.log(relatedList);
    }
  }, [characterDetail]);

  const renderRelatedCharacters = () => {

    const slicedRelatedCharacters = relatedList.slice(0, 9);

    return slicedRelatedCharacters.map((char) => (
      <div className="related-character-profile" key={char.id}>
        <img
          className="character-img"
          src={char.profileImageUrl}
          alt={char.name}
        ></img>
        <div className="related-character-info-container">
          <span className="related-character-name">{char.name}</span>
          <span className="related-character-type">{char.personalityType}</span>
        </div>
      </div>
    ));
  };

  const renderSameAnimeCharacters = () => {

    const slicedSameAnimeCharacters = sameAnimeList.slice(0, 9);

    return slicedSameAnimeCharacters.map((char) => (
      <div className="related-character-profile" key={char.id}>
        <img
          className="character-img"
          src={char.profileImageUrl}
          alt={char.name}
        ></img>
        <div className="related-character-info-container">
          <span className="related-character-name">{char.name}</span>
          <span className="related-character-type">{char.personalityType}</span>
        </div>
      </div>
    ));
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
                <span className="character-detail-name">
                  {characterDetail.name}
                </span>
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
                  Anime: {characterDetail.title}
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
              <span className="character-detail-type">
                {" "}
                MBTI type: {characterDetail.personalityType}{" "}
              </span>
            </div>
          </div>
          <div className="related-character-container">
            <span className="related-title">Các nhân vật có liên quan:</span>
            <div className="related-character-content">
            {renderRelatedCharacters()}
            </div>
            <span className="related-title">
              Các nhân vật trong cùng anime:
            </span>
            <div className="related-character-content">
            {renderSameAnimeCharacters()}
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
