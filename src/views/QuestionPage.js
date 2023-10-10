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
];

function QuestionPage() {
  const history = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [canProceed, setCanProceed] = useState(true);

  const handleItemSelection = (item) => {
    const isItemSelected = selectedItems.includes(item);

    if (selectedItems.length < 4 || isItemSelected) {
      if (isItemSelected) {
        setSelectedItems(selectedItems.filter((selected) => selected !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }

      // Kiểm tra nếu đã chọn "Tôi Không Rõ" thì vô hiệu hóa nút "Tiếp Theo"
      if (selectedItems.includes("Tôi Không Rõ")) {
        setCanProceed(false);
      } else {
        setCanProceed(true);
      }
    }
  };

  const handleNextButtonClick = () => {
    if (selectedItems.length === 4) {
      history("/home");
    } else if (selectedItems.includes("Tôi Không Rõ")) {
      history("/input");
    } else {
      alert("Vui lòng chọn đủ 4 nhóm tính cách");
    }
  };
  return (
    <div className="question-page">
      <div className="question-content">
        <h2>Câu hỏi thứ 1: Chọn 4 mục mà bạn quan trọng nhất:</h2>
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
                      disabled={selectedItems.length === 4 && !selectedItems.includes(item)}
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
                      disabled={selectedItems.length === 4 && !selectedItems.includes(item)}
                    />
                    <span className="checkmark"></span>
                  {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="btn-info"
          onClick={handleNextButtonClick}
          // disabled={!canProceed}
        >
          Tiếp Theo
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;