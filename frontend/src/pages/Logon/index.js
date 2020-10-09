import React from 'react';

import {Link} from  'react-router-dom';

import './style.css'


import logo from '../../assets/logo1.svg'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="carona-logo"/>
                <form action="">
                    <div className="submit">
                        <input placeholder='Digite seu ID'/>
                        <button type='submit' class='button-login'> Login </button>
                    </div>
                    <div className="flex">
                        <a href="#" class="a">Esqueci o ID</a>
                        <Link to="/register" class='button-register'>Register</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}