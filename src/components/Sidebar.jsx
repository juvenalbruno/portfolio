import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

export default function Sidebar() {
    return (
        <nav id="sidebar">
            <div className="logo">    
                <h1>Juvenal Bruno</h1>
            </div>
            <div className="link">
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/about"><h1>Sobre</h1></Link>
                <Link to="/portfolio"><h1>Portfólio</h1></Link>
                <Link to="/contact"><h1>Contato</h1></Link>
            </div>
        </nav>
    );
};