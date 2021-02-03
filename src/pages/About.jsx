import React from 'react';
import { FaSitemap, FaHourglassHalf, FaCog, FaBookOpen, FaPaintBrush, FaUsers, FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFileCode, FaGitAlt} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Image from '../assets/img.png';
import '../styles/about.css';

export default function About() {
    return (
        <div id="page-about">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="page-content">
                <div className="about">
                    <h1>Sobre</h1>
                    <p>Desenvolvedor Web apaixonado pelas atuais tecnologias de desenvolvimento front-end e mobile.</p>
                </div>
                <div className="carateristics">
                    <h2>Principais Características:</h2>
                    <ul>
                        <li><FaSitemap size={25} /> Organização</li>
                        <li><FaCog size={25} /> Objetividade</li>
                        <li><FaHourglassHalf size={25} /> Agilidade</li>
                        <li><FaPaintBrush size={25} /> Criatividade</li>
                        <li><FaBookOpen size={25} /> Fácil Aprendizado</li>
                        <li><FaUsers size={25} /> Trabalho em Equipe</li>
                    </ul>
                </div>
                <div className="skills">
                    <h2>Habilidades:</h2>
                    <ul>
                        <li><FaReact size={25} /> React.JS</li>
                        <li><FaReact size={25} /> React Native</li>
                        <li><FaFileCode size={25} /> Next.JS</li>
                        <li><FaHtml5 size={25} /> HTML</li>
                        <li><FaCss3Alt size={25} /> CSS</li>
                        <li><FaJsSquare size={25} /> JavaScript</li>
                        <li><FaFileCode size={25} />TypeScript</li>
                        <li><FaGitAlt size={25} /> Git</li>
                    </ul>
                </div>
                <div className="image">
                    <img src={Image} alt="Juvenal Bruno"/>
                </div>
            </div>
            
        </div>
    )
}