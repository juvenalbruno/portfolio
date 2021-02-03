import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/portfolio.css';
import { Link } from 'react-router-dom';

import Quiz from '../assets/Quiz.png';
import Ecoleta from '../assets/Ecoleta.png';
import Happy from '../assets/Happy.png';
import Juflix from '../assets/Juflix.png';
import BeTheHero from '../assets/BeTheHero.png';

export default function Portfolio() {
    return (
        <div id="page-portfolio">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <Link to="/portfolio/quiz"><img src={Quiz} alt="Quiz"/></Link>
                <Link to="/portfolio/juflix"><img src={Juflix} alt="Juflix"/></Link>
                <Link to="/portfolio/ecoleta"><img src={Ecoleta} alt="Ecoleta"/></Link>
                <Link to="/portfolio/happy"><img src={Happy} alt="Happy"/></Link>
                <Link to="/portfolio/bethehero"><img src={BeTheHero} alt="Be The hero"/></Link>
            </div>
        </div>
    )
}