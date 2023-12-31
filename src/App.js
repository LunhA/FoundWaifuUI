import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter và Routes
import InputPage from "./views/InputPage";
import CharacterDetails from "./views/CharacterDetails";
import WelcomePage from "./views/WelcomePage";
import Liked from "./views/Liked";
import Home from "./views/Home";
import SearchResults from "./views/SearchResults";
import PersonalSelected from "./views/PersonalitySelected";
import QuestionPage from "./views/QuestionPage";
import Login from "./views/Login";
import Account from "./views/Account";
import PersonalitySelected from "./views/PersonalitySelected";
import './App.css';



function App() {
  return (
    <div>
<Router>
      <Routes> {/* Sử dụng <Routes> để định nghĩa các tuyến */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home/:personalityType" element={<Home />} />
        <Route path="/characterdetails/:characterId" element={<CharacterDetails />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/personality-selected/:personalityType" element={<PersonalitySelected />}/>
        <Route path="/liked" element={<Liked />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/personalselected" element={<PersonalSelected />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
    </div>
    );
}

export default App;
