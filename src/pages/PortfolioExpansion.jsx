import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/portfolioExpansion.css';

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
                <h1>{props.name}</h1>
            </div>
            <div className="container">
                <img src={`https://github.com/juvenalbruno/portfolio/blob/master/src/assets/${props.name}.png`} alt={props.name}/>
                <img src={`https://github.com/juvenalbruno/portfolio/blob/master/src/assets/${props.name}2.png`} alt={props.name}/>
                <img src={`https://github.com/juvenalbruno/portfolio/blob/master/src/assets/${props.name}3.png`} alt={props.name}/>
                <img src={`https://github.com/juvenalbruno/portfolio/blob/master/src/assets/${props.name}4.png`} alt={props.name}/>
            </div>
        </div>
    )
}