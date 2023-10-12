import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputPage() {
  const history = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [characterList, setCharacterList] = useState([]);

  const handleInputSubmit = () => {
    if (inputValue.trim() !== "") {
      if (characterList.length < 5) {
        setCharacterList([...characterList, inputValue]); // Đẩy tên vào mảng characterList
        setInputValue(""); // Đặt lại ô nhập liệu
      }
      if (characterList.length === 4) {
        // Nếu đã đủ 4 tên, thực hiện điều hướng
        history("/home");
      }
    }
  };

  const handleNextClick = () => {
    if (characterList.length === 4) {
      history("/home");
    }
  };

  return (
    <div className="input-question">
      <div className="input-question-content">
        <div className="input-profile-container">
          {/* Render danh sách các tên nhân vật */}
          {characterList.map((character, index) => (
            <div key={index} className="input-profile">
              <img className="input-profile--img" src="" alt=""></img>
              <div className="input-profile-name">{character}</div>
              <div className="input-profile-mbti"></div>
              {/* Thêm các thông tin khác của nhân vật ở đây */}
            </div>
          ))}
        </div>
        <h2>Nhập tối đa 4 nhân vật mà bạn yêu thích:</h2>
        <input
          className="Input-question-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập tên nhân vật bất kỳ..."
        />
        <button
          className="btn-info"
          onClick={characterList.length === 4 ? handleNextClick : handleInputSubmit}
        >
          {characterList.length === 4 ? "Tiếp Theo" : "Nhập"}
        </button>
      </div>
    </div>
  );
}

export default InputPage;
