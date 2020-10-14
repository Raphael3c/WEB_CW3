import React, {useState} from 'react';

import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './style.css'

import Logo from '../../assets/logo1.svg'

export default function Register(){
    const [name, setName] = useState('');
    const [ddd, setDdd] = useState('');
    const [number, setNumber] = useState('');

    const history = useHistory();

    let wpp = `${ddd}${number}`;

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            wpp
        };

        try{
            const response = await api.post('users', data);
            alert(`Seu ID: ${response.data.id}`);

            history.push('/');
        } catch (err){
            alert(`Erro no Cadastro, tente Novamente.`);
        }
    }

    return(
        <div className="register-container">
            <section className="register-form">
                <img src={Logo} alt="carona-logo"/>
                <form onSubmit={handleRegister}>
                    <div className="register-submit">
                        <label htmlFor="">Nome:</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                        <div className="Cellphone">
                            <div>
                                <label htmlFor="">DDD:</label>
                                <select onChange={e => setDdd(e.target.value)}>
                                    <option value="null">Selecione...</option>
                                    <option value="88">88</option>
                                    <option value="85">85</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">N° Whatsapp:</label>
                                <input type="text" 
                                    placeholder="Sem ponto ou hífen." 
                                    value={number} 
                                    onChange={e => setNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type='submit' className='button-register'> Register </button>
                        <Link to="/">Voltar</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}