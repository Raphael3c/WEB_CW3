import React from 'react';

import {Link} from 'react-router-dom';

import './style.css'

import Logo from '../../assets/logo1.svg'

export default function Register(){
    return(
        <div className="register-container">
            <section className="register-form">
                <img src={Logo} alt="carona-logo"/>
                <form action="">
                    <div className="register-submit">
                        <label htmlFor="">Nome:</label>
                        <input type="text"/>
                        <label htmlFor="">E-mail:</label>
                        <input type="text"/>
                        <label htmlFor="">Whatsapp:</label>
                        <input type="text"/>
                        <button type='submit' class='button-register'> Register </button>
                        <Link to="/">Voltar</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}