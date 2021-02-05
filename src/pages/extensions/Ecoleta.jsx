import React from 'react';
import Button from '../../components/Button';
import '../../styles/portfolioExpansion.css';

import Img1 from '../../assets/Ecoleta.png';
import Img2 from '../../assets/Ecoleta2.png';
import Img3 from '../../assets/Ecoleta3.png';
import Img4 from '../../assets/Ecoleta4.png';

export default function PortfolioExpansion() {
    return(
        <div id="page-portfolioExtension">
            <div className="sidebar">
                <Button />
                <h1>Ecoleta</h1>
                {/* <p>Aqui vou colocar alguma coisa!! (Alguma Coisa)</p>
                <p>Link dorepositorio ou alguma informação que contribua para o entendimento do objetivo do projeto.</p> */}
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