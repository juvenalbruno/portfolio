import React from 'react';
import Button from '../../components/Button';
import '../../styles/portfolioExpansion.css';

import Img1 from '../../assets/BeTheHero.png';
import Img2 from '../../assets/BeTheHero2.png';
import Img3 from '../../assets/BeTheHero3.png';
import Img4 from '../../assets/BeTheHero4.png';

export default function BeTheHero() {
    return(
        <div id="page-portfolioExtension">
            <div className="sidebar">
                <Button />
                <h1>Be The Hero</h1>
            </div>
            <div className="container">
                <img src={Img1} alt="BetheHero"/>
                <img src={Img2} alt="BetheHero"/>
                <img src={Img3} alt="BetheHero"/>
                <img src={Img4} alt="BetheHero"/>
            </div>
        </div>
    )
}