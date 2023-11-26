import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./../components/AppHeader";
import AppFooter from "./../components/AppFooter";
import { getSuggestedCharsApi } from "../api/recommendation.api";

export default function Home() {
  const history = useNavigate();
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getSuggestedCharsApi("INFJ").then((res) => setCharacterList(res));
  }, []);

  const renderCharacters = () => {
    return characterList.map((char) => (
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
          className="Characters-container"
          id="Suggested-characters-container"
        ></div>
      </div>
      <AppFooter />
    </div>
  );
}
