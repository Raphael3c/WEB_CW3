import React from 'react';

import Logo from '../../assets/logo1.svg'

import './style.css';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <nav>
                    <img src={Logo} alt="logo"/>
                </nav>
            </header>
        </div>
    );
}