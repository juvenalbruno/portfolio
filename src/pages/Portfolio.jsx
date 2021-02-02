import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/portfolio.css';

import Quiz from '../assets/quiz.png';
import Ecoleta from '../assets/ecoleta.png';
import Happy from '../assets/happy.png';
import Juflix from '../assets/juflix.png';

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
            </div>
        </div>
    )
}