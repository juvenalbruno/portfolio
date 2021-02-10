import React from 'react';
import '../styles/portfolio.css';

import CapaQuiz from '../assets/CapaQuiz.png';
import CapaEcoleta from '../assets/CapaEcoleta.png';
import CapaHappy from '../assets/CapaHappy.png';
import CapaJuflix from '../assets/CapaJuflix.png';
import CapaBeTheHero from '../assets/CapaBeTheHero.png';

export default function Portfolio() {
    return (
        <div id="page-portfolio">
            <h1>Portfólio</h1>            
            <div className="container">
                <div className="card_img">
                    <img src={CapaQuiz} alt="Quiz"/>
                </div>
                <div className="card_img">
                    <img src={CapaJuflix} alt="Juflix"/>
                </div>
                <div className="card_img">
                    <img src={CapaEcoleta} alt="Ecoleta"/>
                </div>
                <div className="card_img">
                    <img src={CapaHappy} alt="Happy"/>
                </div>
                <div className="card_img">
                    <img src={CapaBeTheHero} alt="Be The hero"/>
                </div>
            </div>

        </div>
    )
}