import React, { useState } from 'react';
import '../styles/portfolio.css';

import CapaQuiz from '../assets/CapaQuiz.png';
import Quiz2 from '../assets/Quiz2.png';
import Quiz3 from '../assets/Quiz3.png';
import Quiz4 from '../assets/Quiz4.png';

import CapaEcoleta from '../assets/CapaEcoleta.png';
import Ecoleta2 from '../assets/Ecoleta2.png';
import Ecoleta3 from '../assets/Ecoleta3.png';
import Ecoleta4 from '../assets/Ecoleta4.png';

import CapaHappy from '../assets/CapaHappy.png';
import Happy2 from '../assets/Happy2.png';
import Happy3 from '../assets/Happy3.png';
import Happy4 from '../assets/Happy4.png';

import CapaJuflix from '../assets/CapaJuflix.png';
import Juflix2 from '../assets/Juflix2.png';
import Juflix3 from '../assets/Juflix3.png';
import Juflix4 from '../assets/Juflix4.png';

import CapaBeTheHero from '../assets/CapaBeTheHero.png';
import BeTheHero2 from '../assets/BeTheHero2.png';
import BeTheHero3 from '../assets/BeTheHero3.png';
import BeTheHero4 from '../assets/BeTheHero4.png';

import { FaArrowCircleLeft } from 'react-icons/fa';

export default function Portfolio() {
    const [Visibility, setVisibility] = useState(false);
    const [imgId0, setImgId0] = useState();
    const [imgId1, setImgId1] = useState();
    const [imgId2, setImgId2] = useState();
    const [imgId3, setImgId3] = useState();

    return (
        <div id="page-portfolio">
            <h1>Portfólio</h1>
            <div className="modal" style={Visibility ? { visibility:'visible' } : { visibility: 'hidden' }}>
                <div className="modal_content">
                    <img src={imgId0} alt="" className="modal_img"/>
                    <img src={imgId1} alt="" className="modal_img"/>
                    <img src={imgId2} alt="" className="modal_img"/>
                    <img src={imgId3} alt="" className="modal_img"/>
                </div>
                <button 
                    className="btn_close" 
                    onClick={() => {
                        setVisibility(false)
                        setImgId0('')
                        setImgId1('')
                        setImgId2('')
                        setImgId3('')
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
                            setImgId0(CapaQuiz)
                            setImgId1(Quiz2)
                            setImgId2(Quiz3)
                            setImgId3(Quiz4)
                        }}
                    />
                </div>
                <div className="card_img">
                    <img
                        src={CapaJuflix}
                        alt="Juflix"
                        onClick={() => {
                            setVisibility(true)
                            setImgId0(CapaJuflix)
                            setImgId1(Juflix2)
                            setImgId2(Juflix3)
                            setImgId3(Juflix4)
                        }}
                    />
                </div>
                <div className="card_img">
                    <img
                        src={CapaEcoleta}
                        alt="Ecoleta"
                        onClick={() => {
                            setVisibility(true)
                            setImgId0(CapaEcoleta)
                            setImgId1(Ecoleta2)
                            setImgId2(Ecoleta3)
                            setImgId3(Ecoleta4)
                        }}
                    />
                </div>
                <div className="card_img">
                    <img
                        src={CapaHappy}
                        alt="Happy"
                        onClick={() => {
                            setVisibility(true)
                            setImgId0(CapaHappy)
                            setImgId1(Happy2)
                            setImgId2(Happy3)
                            setImgId3(Happy4)
                        }}
                    />
                </div>
                <div className="card_img">
                    <img
                        src={CapaBeTheHero}
                        alt="Be The hero"
                        onClick={() => {
                            setVisibility(true)
                            setImgId0(CapaBeTheHero)
                            setImgId1(BeTheHero2)
                            setImgId2(BeTheHero3)
                            setImgId3(BeTheHero4)
                        }}
                    />
                </div>
            </div>

        </div>
    )
}