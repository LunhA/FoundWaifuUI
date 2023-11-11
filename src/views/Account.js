import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

const iMBTIitems = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

function Account() {
  const [typePopup, setTypePopup] = useState(false);
  const [accountPopup, setAccountPopup] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectingTypes, setSelectingTypes] = useState([]);

  const handleTypePopup = () => {
    setTypePopup(true);
  };

  const handleAccountPopup = () => {
    setAccountPopup(true);
  };

  const handleClosePopup = () => {
    setTypePopup(false);
    setAccountPopup(false);
  };

  const handleTypeSelect = (type) => {
    const isSelected = selectingTypes.includes(type);

    if (isSelected) {
      // Deselect type if it's already selected
      setSelectingTypes((prevTypes) =>
        prevTypes.filter((selectingType) => selectingType !== type)
      );
    } else {
      // Select type if it's not selected and the limit is not reached
      if (selectingTypes.length < 4) {
        setSelectingTypes((prevTypes) => [...prevTypes, type]);
      }
    }
  };

  const handleTypeConfirm = () => {
    // Handle the selected types
    setSelectedTypes(selectingTypes);
    console.log("Selected Types:", selectedTypes);
    handleClosePopup();
  };

  const handleAccountConfirm = () => {

    handleClosePopup();
  };

  return (
    <div className="home-page">
      <AppHeader />
      <div className="home-container">
        <div className="account-container">
          <div className="div70">
            <span className="">User:</span>
            <div className="account-info-container">
              <span className="account-username">LAKAKAKA</span>
              <button className="btn btn-outline-light account-btn" onClick={handleAccountPopup}>
                Change Information
              </button>
            </div>
            <span>Type Selected:</span>
            <div className="type-selected-container">
              {selectedTypes.map((type) => (
                <p key={type}>{type}</p>
              ))}
            </div>
            <button
              className="btn btn-outline-light account-btn"
              onClick={handleTypePopup}
            >
              Change Type
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {typePopup && (
        <div>
          <div className="overlay" onClick={handleClosePopup}></div>
          <div className="popup">
            <h2>Please select 4 Types:</h2>
            <div className="type-selection">
              {iMBTIitems.map((type) => (
                <div
                  key={type}
                  className={`type-option ${
                    selectingTypes.includes(type) ? "active" : ""
                  }`}
                  onClick={() => handleTypeSelect(type)}
                >
                  {type}
                </div>
              ))}
            </div>
            <button
              className="btn btn-outline-dark mt-2"
              onClick={handleTypeConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {accountPopup && (
        <div>
          <div className="overlay" onClick={handleClosePopup}></div>
          <div className="popup">
            <h2>Account Management:</h2>
            <div className="account-management-container">
                <label>Username:</label>
                <input></input>

                <label>Password:</label>
                <input></input>
                
                <label>Confirm Password:</label>
                <input></input>
            </div>
            <button
              className="btn btn-outline-dark mt-2"
              onClick={handleAccountConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
      <AppFooter />
    </div>
  );
}

export default Account;
