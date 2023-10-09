import React from "react";
// import ReactDOM from 'react-dom';
// import App from '../App';
import { Switch, Routes, Route } from "react-router-dom";
import InputPage from "../views/InputPage";
import CharacterDetails from "../views/CharacterDetails";
import WelcomePage from "../views/WelcomePage";
import Liked from "../views/Liked";
import SearchResults from "../views/SearchResults";
import PersonalSelected from "../views/PersonalitySelected";
import QuestionPage from "../views/QuestionPage";

export default function router() {
  return (
    <Routes>
        <Route path="/" name="Landing Page" component={WelcomePage} />
        <Route
          path="/characterdetails/:id"
          name="Character Details"
          component={CharacterDetails}
        />
        <Route path="/input" component={InputPage} />
        <Route path="/liked" component={Liked} />
        <Route path="/searchresults" component={SearchResults} />
        <Route path="/personalselected" component={PersonalSelected} />
        <Route path="/question" component={QuestionPage} />
    </Routes>
  );
}
