import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/home.css'

export default function Home() {
    return(
        <div id="page-home">
           <div className="sidebar">
                <Sidebar />
            </div>

            <div className="content">
                <h1>Juvenal Bruno</h1>
                <h2>Desenvolvedor Front-End</h2>
            </div>
        </div>
    );
}