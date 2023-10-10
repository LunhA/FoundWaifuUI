import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  "Mục 1",
  "Mục 2",
  "Mục 3",
  "Mục 4",
  "Mục 5",
  "Mục 6",
  "Tôi Không Rõ",
];

function QuestionPage() {
  const history = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelection = (item) => {
    if (selectedItems.length < 4 || item === "Tôi Không Rõ") {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleNextButtonClick = () => {
    if (selectedItems.length === 4 && !selectedItems.includes("Tôi Không Rõ")) {
      history("/home"); // Điều hướng đến trang home nếu điều kiện thỏa mãn
    } else {
      if (selectedItems.includes("Tôi Không Rõ")) {
        history("/input"); //
      }
    }
  };

  return (
    <div className="question-page">
      <div className="question-content">
        <h2>Câu hỏi thứ 1: Chọn 4 mục mà bạn quan trọng nhất:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  value={item}
                  onChange={() => handleItemSelection(item)}
                  disabled={selectedItems.length === 4}
                />
                <span className="checkmark"></span>
              </label>
                {item}
            </li>
          ))}
        </ul>

        <button
          className="btn-info"
          onClick={handleNextButtonClick}
          disabled={
            selectedItems.length !== 4 &&
            !selectedItems.includes("Tôi Không Rõ")
          }
        >
          Tiếp Theo
        </button>
      </div>
    </div>
  );
}
export default QuestionPage;
