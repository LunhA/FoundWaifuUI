import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from './../components/AppHeader';
import AppFooter from './../components/AppFooter';

export default function Home() {

    return (
        <div className="home-page">
            <AppHeader/>
            <div className="home-container">
                
            </div>
            <AppFooter/>
        </div>
    );
}