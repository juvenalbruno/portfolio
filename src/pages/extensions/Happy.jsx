import React from 'react';
import Button from '../../components/Button';
import '../../styles/portfolioExpansion.css';

import Img1 from '../../assets/Happy.png';
import Img2 from '../../assets/Happy2.png';
import Img3 from '../../assets/Happy3.png';
import Img4 from '../../assets/Happy4.png';

export default function Happy() {
    return(
        <div id="page-portfolioExtension">
            <div className="sidebar">
                <Button />
                <h1>Happy</h1>
            </div>
            <div className="container">
                <img src={Img1} alt="Happy"/>
                <img src={Img2} alt="Happy"/>
                <img src={Img3} alt="Happy"/>
                <img src={Img4} alt="Happy"/>
            </div>
        </div>
    )
}