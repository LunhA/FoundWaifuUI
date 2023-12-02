import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppHeader from "./../components/AppHeader";
import AppFooter from "./../components/AppFooter";
import { getSuggestedCharsApi, getMutualCharacterApi } from "../api/recommendation.api";

export default function Home() {
  const history = useNavigate();
  const { personalityType } = useParams();
  const [characterList, setCharacterList] = useState([]);
  const [relatedList, setRelatedList] = useState([]);

  useEffect(() => {
    getSuggestedCharsApi(personalityType).then((res) => setCharacterList(res));
  }, [personalityType]);

  console.log(characterList);

  const renderCharacters = () => {
    return characterList.map((char) => (
      <div className="character-profile">
        <img className="character-img" src={char.profileImageUrl} alt=""></img>
        <span className="character-name">{char.name}</span>
        <span className="character-type">{char.personalityType}</span>
      </div>
    ));
  };

  useEffect(() => {
      getMutualCharacterApi(personalityType).then((res) => setRelatedList(res));
      console.log(relatedList);
  },[personalityType]);

  const renderRelatedCharacters = () => {
    return relatedList.map((char) => (
      <div className="character-profile">
        <img className="character-img" src={char.profileImageUrl} alt=""></img>
        <span className="character-name">{char.name}</span>
        <span className="character-type">{char.personalityType}</span>
      </div>
    ));
  };
  return (
    <div className="home-page">
      <AppHeader />
      <div className="home-container">
        <span className="Characters-container-title">
          Các nhân vật bạn đã chọn:{" "}
        </span>
        <div className="characters-container" id="Inputed-characters-container">
          {renderCharacters()}
        </div>
        <span className="Characters-container-title">
          Đề xuất dựa theo lựa chọn của bạn:{" "}
        </span>
        <div
          className="characters-container"
          // id="Suggested-characters-container"
          id="Inputed-characters-container"
        >
          <div className="container70" >
          {renderRelatedCharacters()}
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
