import React from 'react';
import '../styles/home.css';
import { FiChevronDown } from 'react-icons/fi';

export default function Home() {
    return (
        <div id="page-home">
            <div className="text">
                <h1>Desenvolvedor Front-End</h1>
                <h2>Criação e Desenvolvimento Web / Mobile.</h2>
            </div>
            <footer>
                <a href="#about" style={{color: 'black'}}><FiChevronDown size={58}/></a>
            </footer>
        </div>
    );
}