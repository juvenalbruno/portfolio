import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/portfolio.css';
import { Link } from 'react-router-dom';

import Quiz from '../assets/Quiz.png';
import Ecoleta from '../assets/ecoleta.png';
import Happy from '../assets/happy.png';
import Juflix from '../assets/Juflix.png';
import BeTheHero from '../assets/BeTheHero.png';

export default function Portfolio() {
    return (
        <div id="page-portfolio">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <Link to="/portfolio/expansion">
                    <img src={Quiz} alt="Quiz"/>
                </Link>
                <Link to="/portfolio/expansion">
                    <img src={Juflix} alt="Juflix"/>
                </Link>
                <Link to="/portfolio/expansion">
                    <img src={Ecoleta} alt="Ecoleta"/>
                </Link>
                <Link to="/portfolio/expansion">
                    <img src={Happy} alt="Happy"/>
                </Link>
                <Link to="/portfolio/expansion">
                    <img src={BeTheHero} alt="BeTheHero"/>
                </Link>
            </div>
        </div>
    )
}