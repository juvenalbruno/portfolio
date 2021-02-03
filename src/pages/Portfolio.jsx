import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/portfolio.css';

import Quiz from '../assets/PrintScreens/Quiz/Quiz.png';
import Ecoleta from '../assets/PrintScreens/Ecoleta/ecoleta.png';
import Happy from '../assets/PrintScreens/Happy/happy.png';
import Juflix from '../assets/PrintScreens/Juflix/Juflix.png';
import BeTheHero from '../assets/PrintScreens/BeTheHero/BeTheHero.png';

export default function Portfolio() {
    return (
        <div id="page-portfolio">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <img src={Quiz} alt="quiz"/>
                <img src={Juflix} alt="Juflix"/>
                <img src={Ecoleta} alt="Ecoleta"/>
                <img src={Happy} alt="Happy"/>
                <img src={BeTheHero} alt="BeTheHero"/>
            </div>
        </div>
    )
}