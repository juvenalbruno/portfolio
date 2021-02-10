// eslint-disable-next-line
import React from 'react';
import { FiLogOut } from 'react-icons/fi';

export default function Button() {
    return(
        <a href="#portfolio">
            <FiLogOut color="white" size={28} style={{transform: [{rotateY: '180deg'}]}} />
            <p>Voltar para Portfólio</p>
        </a>
    );
}