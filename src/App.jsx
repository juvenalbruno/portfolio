import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import '../src/styles/app.css';

export default function App() {
    return(
        <div id="page-content">
            <Sidebar />
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="portfolio"><Portfolio /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
}