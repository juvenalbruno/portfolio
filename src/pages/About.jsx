import React from 'react';
import { FaPaperclip, FaSitemap, FaHourglassHalf, FaCog, FaBookOpen, FaPaintBrush, FaUsers, FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFileCode, FaGitAlt, FaCode } from 'react-icons/fa';
import Image from '../assets/img.png';
import '../styles/about.css';

export default function About() {
    return (
        <div id="page-about">
            <div className="about">
                <h1>Sobre</h1>
                <p>Desenvolvedor Web apaixonado pelas atuais tecnologias de desenvolvimento front-end e mobile.</p>
            </div>
            <div className="carateristics">
                <h2><FaPaperclip size={30} color={'#640000'}/>Principais Características:</h2>
                <ul>
                    <li><FaSitemap /> Organização</li>
                    <li><FaCog /> Objetividade</li>
                    <li><FaHourglassHalf /> Agilidade</li>
                    <li><FaPaintBrush /> Criatividade</li>
                    <li><FaBookOpen /> Fácil Aprendizado</li>
                    <li><FaUsers /> Trabalho em Equipe</li>
                </ul>
            </div>
            <div className="skills">
                <h2><FaCode size={30} color={'#7c0101'}/>Habilidades:</h2>
                <ul>
                    <li><FaReact /> React.JS</li>
                    <li><FaReact /> React Native</li>
                    <li><FaFileCode /> Next.JS</li>
                    <li><FaHtml5 /> HTML</li>
                    <li><FaCss3Alt /> CSS</li>
                    <li><FaJsSquare /> JavaScript</li>
                    <li><FaFileCode />TypeScript</li>
                    <li><FaGitAlt /> Git</li>
                </ul>
            </div>
            <div className="image">
                <img src={Image} alt="Juvenal Bruno" />s
            </div>
        </div>
    )
}