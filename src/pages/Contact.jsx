import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import '../styles/contact.css';

export default function Contact() {
    return (
        <div id="page-contact">
            <div className="page-logo">
                <h1>Envie uma mensagem!</h1>
            </div>
            <div className="page-links">
                <h1>Contatos:</h1>
                <h2><a target="blank" href='https://outlook.live.com/'><FaEnvelope size={25} color={'rgb(0, 10, 143)'} /></a> bruno.andrade178@hotmail.com</h2>
                <h2><a target="blank" href='https://github.com/juvenalbruno/'><FaGithub size={25} color={'rgb(116, 10, 255)'}/></a>github.com/juvenalbruno</h2>
                <h2><a target="blank" href='https://www.linkedin.com/in/juvenal-bruno-andrade-b6769b190/'><FaLinkedin size={25} color={'rgb(0, 4, 255)'} /></a> Juvenal Bruno Andrade</h2>
                <h2><a target="blank" href='https://www.instagram.com/jovem.developer/?hl=pt-br/'><FaInstagram size={25} color={'rgb(151, 35, 0)'} /></a>@jovem.developer</h2>
            </div>   
        </div>
    )
}