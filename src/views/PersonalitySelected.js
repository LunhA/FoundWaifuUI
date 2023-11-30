import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { getCharacterByMbtiApi } from "../api/recommendation.api";

function PersonalitySelected() {
  const { personalityType } = useParams();
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characterList.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  useEffect(() => {
    getCharacterByMbtiApi(personalityType).then((res) => setCharacterList(res));
  }, [personalityType]);


  const totalPages = Math.ceil(characterList.length / charactersPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  const renderCharacters = () => {
    return currentCharacters.map((char) => (
      <li className="character-item" key={char.id}>
        <div className="character-info">
          <img
            className="liked-character-img"
            src={char.profileImageUrl}
            alt={char.name}
          />
          <div className="liked-character-info-container">
            <span className="liked-character-name">{char.name}</span>
            <span className="liked-character-personality">
              {char.personalityType}
            </span>
          </div>
        </div>
      </li>
    ));
  };

  // const renderPaginationButtons = () => {
  //   const pageBtn = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     pageBtn.push(
  //       <button key={i} onClick={() => handlePageChange(i)}>
  //         {i}
  //       </button>
  //     );
  //   }
  //   return pageBtn;
  // };

  const renderPageButtons = () => {
    const pageBtn = [];
    const maxVisiblePages = 5; // Số lượng trang hiển thị

    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      const middlePage = Math.floor(maxVisiblePages / 2);
      const offset = currentPage - middlePage;

      startPage = Math.max(1, offset);
      endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageBtn.push(
        <button key={i} onClick={() => handlePageChange(i)} className={i === currentPage ? "active btn-outline-info " : "btn-outline-info"}>
          {i}
        </button>
      );
    }

    return pageBtn;
  };

  return (
    <div className="home-page">
      <AppHeader />
      <div className="home-container">
        <div className="search-container">
          <div className="div70">
            <span className="">Kết quả cho {personalityType}:</span>
            <div className="character-list">
              <ul>{renderCharacters()}</ul>
              {/* <div className="pagination">{renderPaginationButtons()}</div> */}
              <div className="paginations">
                {renderPageButtons()}
                {currentPage < totalPages - 2 && <span>...</span>}
                {currentPage < totalPages - 1 && (
                  <button className="btn-outline-info" onClick={() => handlePageChange(totalPages - 1)}>{totalPages - 1}</button>
                )}
                {currentPage < totalPages && (
                  <button className="btn-outline-info" onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}

export default PersonalitySelected;
