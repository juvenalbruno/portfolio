import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/portfolio.css';

import CapaQuiz from '../assets/CapaQuiz.png';
import Quiz from '../assets/Quiz.png';
import CapaEcoleta from '../assets/CapaEcoleta.png';
import Ecoleta from '../assets/Ecoleta.png';
import CapaHappy from '../assets/CapaHappy.png';
import Happy from '../assets/Happy.png';
import CapaJuflix from '../assets/CapaJuflix.png';
import Juflix from '../assets/Juflix.png';
import CapaBeTheHero from '../assets/CapaBeTheHero.png';
import BeTheHero from '../assets/BeTheHero.png';

import { FaArrowCircleLeft } from 'react-icons/fa';

export default function Portfolio() {
    const [Visibility, setVisibility] = useState(false);
    const [imgId, setImgId] = useState();

    return (
        <div id="page-portfolio">
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="modal" style={Visibility ? { visibility:'visible' } : { visibility: 'hidden' }}>
                <div className="modal_content">
                    <img src={imgId} alt="" className="modal_img"/>
                </div>
                <button 
                    className="btn_close" 
                    onClick={() => {
                        setVisibility(false)
                        setImgId('')
                    }}
                >
                    <FaArrowCircleLeft size={20} />
                    Voltar
                </button>
            </div>
            
            <div className="container">
                <div className="card_img">
                    <img
                        src={CapaQuiz}
                        alt="Quiz"
                        onClick={() => {
                            setVisibility(true)
                            setImgId(Quiz)
                        }}
                    />
                </div>
                <div className="card_img">
                    <img
                        src={CapaJuflix}
                        alt="Juflix"
                        onClick={() => {
                            setVisibility(true)
                            setImgId(Juflix)
                        }}
                    />
                </div>
                <div className="card_img">
                    <img
                        src={CapaEcoleta}
                        alt="Ecoleta"
                        onClick={() => {
                            setVisibility(true)
                            setImgId(Ecoleta)
                        }}
                    />
                </div>
                <div className="card_img">
                    <img
                        src={CapaHappy}
                        alt="Happy"
                        onClick={() => {
                            setVisibility(true)
                            setImgId(Happy)
                        }}
                    />
                </div>
                <div className="card_img">
                    <img
                        src={CapaBeTheHero}
                        alt="Be The hero"
                        onClick={() => {
                            setVisibility(true)
                            setImgId(BeTheHero)
                        }}
                    />
                </div>
            </div>

        </div>
    )
}