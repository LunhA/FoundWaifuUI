import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputPage() {
  const history = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputSubmit = () => {
    if (inputValue.trim() !== "") {
      history.push("/result"); // Điều hướng đến trang kết quả sau khi nhập
    }
  };

  return (
    <div className="input-question">
      <div className="input-question-content">
        <h2>Nhập thông tin của bạn:</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập thông tin của bạn"
        />
        <button onClick={handleInputSubmit}>Tiếp Theo</button>
      </div>
    </div>
  );
}

export default InputPage;
