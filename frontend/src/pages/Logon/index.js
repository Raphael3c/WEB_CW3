import React, {useState} from 'react';

import {Link, useHistory} from  'react-router-dom';

import api from '../../services/api';

import './style.css'


import logo from '../../assets/logo1.svg'

export default function Logon(){
    const[id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions', { id });
            localStorage.setItem('userID', id);
            localStorage.setItem('userName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no Login');
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="carona-logo"/>
                <form onSubmit={handleLogin}>
                    <div className="submit">
                        <input placeholder='Digite seu ID' value={id} onChange={e => setId(e.target.value)}/>
                        <button type='submit' className='button-login'> Login </button>
                    </div>
                    <div className="flex">
                        <a href="#" className="a">Esqueci o ID</a>
                        <Link to="/register" className='button-register'>Register</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}