import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const items = [
    'Mục 1',
    'Mục 2',
    'Mục 3',
    'Mục 4',
    // Thêm các mục khác tại đây
  ];

function QuestionPage() {
  const history = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelection = (item) => {
    if (selectedItems.length < 4) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleNextButtonClick = () => {
    if (selectedItems.length === 4) {
      history.push('/input');
    }
  };

  return (
    <div className="question-page">
      <h2>Câu hỏi thứ 1: Chọn 4 mục mà bạn quan trọng nhất:</h2>
      <ul>
        {/* Sử dụng map để tạo các mục và tick cho việc chọn */}
        {items.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={item}
                onChange={() => handleItemSelection(item)}
                disabled={selectedItems.length === 4}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextButtonClick} disabled={selectedItems.length !== 4}>
        Tiếp Theo
      </button>
    </div>
  );
}

export default QuestionPage;