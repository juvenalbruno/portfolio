import React from 'react';
import './sidebar.css';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <nav id="sidebar">
            <div className="logo">    
                <h1>Juvenal Bruno</h1>
                <p>Desenvolvedor Front-End</p>
            </div>
            <div className="link">
                <a href="#home"><h1>Home</h1></a>
                <a href="#about"><h1>Sobre</h1></a>
                <a href="#portfolio"><h1>Portfólio</h1></a>
                <a href="#contact"><h1>Contato</h1></a>
                <div className="conect">
                    <a target="blank" href='https://www.linkedin.com/in/juvenal-bruno-andrade-b6769b190/'><FaLinkedinIn size={25} color={'rgb(0, 4, 255)'} /></a>
                    <a target="blank" href='https://www.instagram.com/jovem.developer/?hl=pt-br/'><FaInstagram size={25} color={'rgb(151, 35, 0)'}/></a>
                    <a target="blank" href='https://github.com/juvenalbruno/'><FaGithub size={25} color={'rgb(116, 10, 255)'}/></a>
                </div>
            </div>
        </nav>
    );
};