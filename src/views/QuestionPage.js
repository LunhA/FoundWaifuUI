import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const introvertedItems = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
];

const extravertedItems = [
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
  "Tôi Không Rõ",
];

function QuestionPage() {
  const history = useNavigate();
  const [selectedItem, setSelectedItem] = useState([]);
  const [canProceed, setCanProceed] = useState(true);

  const handleItemSelection = (item) => {
    const isItemSelected = selectedItem.includes(item);

    if (selectedItem.length < 1 || isItemSelected) {
      if (isItemSelected) {
        setSelectedItem(selectedItem.filter((selected) => selected !== item));
      } else {
        setSelectedItem([...selectedItem, item]);
      }

      // Kiểm tra nếu đã chọn "Tôi Không Rõ" thì vô hiệu hóa nút "Tiếp Theo"
      if (selectedItem.includes("Tôi Không Rõ")) {
        setCanProceed(false);
      } else {
        setCanProceed(true);
      }
    }
  };

  const handleNextButtonClick = () => {
    if (selectedItem.includes("Tôi Không Rõ")) {
      history("/input");
    } else if (selectedItem.length === 1) {
      history(`/home/${selectedItem}`);
    } else {
      alert("Vui lòng chọn 1 nhóm tính cách");
    }
  };
  return (
    <div className="question-page">
      <div className="question-content">
        <h2>Hãy chọn tính cách mà bạn yêu thích:</h2>
        <div className="columns">
          <div className="column">
            <ul>
              {introvertedItems.map((item, index) => (
                <li key={index}>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      value={item}
                      onChange={() => handleItemSelection(item)}
                      disabled={
                        selectedItem.length === 1 &&
                        !selectedItem.includes(item)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <ul>
              {extravertedItems.map((item, index) => (
                <li key={index}>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      value={item}
                      onChange={() => handleItemSelection(item)}
                      disabled={
                        selectedItem.length === 1 &&
                        !selectedItem.includes(item)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="btn-info"
          onClick={handleNextButtonClick}
          disabled={!canProceed}
        >
          Tiếp Theo
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;
