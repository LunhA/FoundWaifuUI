import React from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

function PersonalitySelected() {
    return (
      <div className="home-page">
        <AppHeader />
        <div className="home-container">
          <div className="search-container">
            <div className="div70">
              <span className="">Danh mục yêu thích:</span>
  
              <div className="character-list">
                <ul>
                  <li className="character-item">
                    <div className="character-info">
                      <img
                        className="liked-character-img"
                        src="https://dummyimage.com/300/09f/fff.png"
                        alt=""
                      />
                      <div className="liked-character-info-container">
                        <span className="liked-character-name">
                          Tên nhân vật 1
                        </span>
                        <span className="liked-character-personality">
                          Tính cách 1
                        </span>
                      </div>
                      {/* <div className="div16">
                      <span className="fa fa-heart liked-check"></span> 
                      </div> */}
                    </div>
                  </li>
  
                  {/* <li className="character-item">
                    <div className="character-info">
                      <img
                        className="liked-character-img"
                        src="https://dummyimage.com/300/09f/fff.png"
                        alt=""
                      />
                      <div className="liked-character-info-container">
                        <span className="liked-character-name">
                          Tên nhân vật 1
                        </span>
                        <span className="liked-character-personality">
                          Tính cách 1
                        </span>
                      </div>
                      <div className="div16">
                      <span className="fa fa-heart liked-check"></span> 
                      </div>
                    </div>
                  </li> */}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <AppFooter />
      </div>
    );
  }
  

export default PersonalitySelected;