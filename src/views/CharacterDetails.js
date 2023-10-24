import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./../components/AppHeader";
import AppFooter from "./../components/AppFooter";

export default function CharacterDetails() {
    const history = useNavigate();
//   const [characterList, setCharacterList] = useState([]);

return  (
    <div className="home-page">
        <AppHeader />
        <div className="character-details-container">
            <div className="character-detail-container" >
            <button> Back </button> 
            </div>
        </div>
        <AppFooter />
    </div>
)

}