import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Button() {
    return(
        <Link to="/portfolio">
            <FiLogOut
                color="white"
                size={28}
                style={{transform: [{rotateY: '180deg'}]}}
            />
            <p>Voltar para Portfólio</p>
        </Link>
    );
}