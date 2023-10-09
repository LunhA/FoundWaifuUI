import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter và Routes
import InputPage from "./views/InputPage";
import CharacterDetails from "./views/CharacterDetails";
import WelcomePage from "./views/WelcomePage";
import Liked from "./views/Liked";
import SearchResults from "./views/SearchResults";
import PersonalSelected from "./views/PersonalitySelected";
import QuestionPage from "./views/QuestionPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes> {/* Sử dụng <Routes> để định nghĩa các tuyến */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/characterdetails/:id" element={<CharacterDetails />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/personalselected" element={<PersonalSelected />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
