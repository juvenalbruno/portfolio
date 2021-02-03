import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/portfolioExpansion.css';
import db from '../db.json';

import BD from '../assets/ecoleta.png'
import BD2 from '../assets/ecoleta2.png'
import BD3 from '../assets/ecoleta3.png'
import BD4 from '../assets/ecoleta4.png'

export default function PortfolioExpansion(props) {
    

    return(
        <div id="page-portfolioExtension">
            <div className="sidebar">
                <Link to="/portfolio">
                    <FiLogOut
                        color="white"
                        size={28}
                        style={{transform: [{rotateY: '180deg'}]}}
                    />
                    <p>Voltar para Portfólio</p>
                </Link>
                <h1>Ecoleta</h1>
            </div>
            <div className="container">
                <img src={db.imgs.Ecoleta.img1} alt="Ecoleta"/>
                <img src={BD2} alt="Ecoleta"/>
                <img src={BD3} alt="Ecoleta"/>
                <img src={BD4} alt="Ecoleta"/>
            </div>
        </div>
    )
}