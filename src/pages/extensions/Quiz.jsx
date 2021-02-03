import React from 'react';
import Button from '../../components/Button';
import '../../styles/portfolioExpansion.css';

import Img1 from '../../assets/Quiz.png';
import Img2 from '../../assets/Quiz2.png';
import Img3 from '../../assets/Quiz3.png';

export default function Quiz() {
    return(
        <div id="page-portfolioExtension">
            <div className="sidebar">
                <Button />
                <h1>Quiz - O Senhor dos Anéis</h1>
            </div>
            <div className="container">
                <img src={Img1} alt="Quiz"/>
                <img src={Img2} alt="Quiz"/>
                <img src={Img3} alt="Quiz"/>
            </div>
        </div>
    )
}