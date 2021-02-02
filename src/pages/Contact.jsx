import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import '../styles/contact.css';

export default function Contact() {
    return (
        <div id="page-contact">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="page-contacts">
                <div className="page-logo">
                    <h1>Juvenal Bruno</h1>
                </div>
                <div className="page-links">
                    <h1>Contatos:</h1>
                    <h2><FaEnvelope size={30} /> bruno.andrade178@hotmail.com</h2>
                    <h2><FaLinkedin size={30} /> Juvenal Bruno Andrade</h2>
                    <h2><FaGithub size={30} /> github.com/juvenalbruno</h2>
                    <h2><FaInstagram size={30} /> @jovem.developer</h2>
                </div>
            </div>
        </div>
    )
}