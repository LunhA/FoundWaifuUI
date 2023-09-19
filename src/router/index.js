import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from '../views/Landing';
import CharacterDetails from '../views/CharacterDetails';
import FamousPeople from '../views/FamousPeople';
import Liked from '../views/Liked';
import SearchResults from '../views/SearchResults';
import PersonalSelected from '../views/PersonalitySelected';
import FictionalCharacters from '../views/FictionalCharacters';


export default function router() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" name ="Landing Page" component = {Landing} />
                    <Route path="/characterdetails/:id" name = "Character Details" component = {CharacterDetails} />
                    <Route path="/famouspeople" component = {FamousPeople} />
                    <Route path="/liked" component = {Liked} />
                    <Route path="/searchresults" component = {SearchResults} />
                    <Route path="/personalselected" component = {PersonalSelected} />
                    <Route path="/fictionalcharacters" component = {FictionalCharacters} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

