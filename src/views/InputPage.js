import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputPage() {
  const history = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [characterList, setCharacterList] = useState([]);

  const handleInputSubmit = () => {
    if (inputValue.trim() !== "") {
      history.push("/home"); // Điều hướng đến trang kết quả sau khi nhập
    }
  };

  return (
    <div className="input-question">
      <div className="input-question-content">
        <div className="input-profile-container">
          <div className="input-profile">
            <img className="input-profile--img" src="" alt=""></img>
            <div className="input-profile-name">Gia Hoà</div>
            <div className="input-profile-mbti">ESFP</div>
          </div>
        </div>
        <h2>Nhập tối đa 4 nhân vật mà bạn yêu thích:</h2>
        <input
          className="Input-question-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập tên nhân vật bất kỳ..."
        />
        <button className="btn-info" onClick={handleInputSubmit}>Nhập</button>
      </div>
    </div>
  );
}

export default InputPage;
