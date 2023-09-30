import React, { useState } from 'react';

function Landing() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputCount, setInputCount] = useState(0);

  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    if (event.target.checked && selectedOptions.length < 4) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim() !== '' && inputCount < 4) {
      setSelectedOptions([...selectedOptions, inputValue]);
      setInputValue('');
      setInputCount(inputCount + 1);
    }
  };

  return (
    <div className="main-page">
      <div className="main-container">
        <div className="question">
          <p>Chọn 4 mục mà bạn quan trọng nhất:</p>
          <div className="options">
            <label>
              <input
                type="checkbox"
                value="Option 1"
                onChange={handleCheckboxChange}
                disabled={selectedOptions.length === 4}
              />
              Option 1
            </label>
            <label>
              <input
                type="checkbox"
                value="Option 2"
                onChange={handleCheckboxChange}
                disabled={selectedOptions.length === 4}
              />
              Option 2
            </label>
            <label>
              <input
                type="checkbox"
                value="Option 3"
                onChange={handleCheckboxChange}
                disabled={selectedOptions.length === 4}
              />
              Option 3
            </label>
            <label>
              <input
                type="checkbox"
                value="Option 4"
                onChange={handleCheckboxChange}
                disabled={selectedOptions.length === 4}
              />
              Option 4
            </label>
            <label>
              <input
                type="checkbox"
                value="Tôi không rõ"
                onChange={handleCheckboxChange}
                disabled={selectedOptions.length === 4}
              />
              Tôi không rõ
            </label>
          </div>
        </div>
        <div className="selected-options">
          {selectedOptions.map((option, index) => (
            <p key={index}>{option}</p>
          ))}
        </div>
        {selectedOptions.length === 4 && (
          <button className="next-button">Tiếp Theo</button>
        )}
        {inputCount < 4 && (
          <div className="input-page">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Nhập lựa chọn của bạn"
            />
            <button className='' onClick={handleInputSubmit}>Nhập</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
