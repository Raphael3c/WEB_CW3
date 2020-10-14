import React, {useState} from 'react';

import {Link, useHistory} from  'react-router-dom';

import api from '../../services/api';

import Logo from '../../assets/logo1.svg'

import "react-datetime/css/react-datetime.css";
import DateTimePicker from 'react-datetime-picker';

import './style.css'


export default function NewCarona(){
    const [cidade, setCidade] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [comentario, setComentario] = useState('');
    const [tipo, setTipo] = useState('');
    const [datac, setDatac] = useState(new Date());

    const user_id = localStorage.getItem('userID');

    const history = useHistory();

    async function handleRegisterS(e){
        e.preventDefault();

        let data = datac.toString();
        
        data = data.slice(0, 21);

        const dado ={
            cidade,
            origem,
            destino,
            comentario,
            data,
            user_id,
            tipo        
        };

        try{
            console.log(await api.post('caronas', dado, {
                headers: {
                    Authorization: user_id
                }
            }))
            history.push('/profile');
        }catch(err){
            alert('Erro');
        }
    }
    
    return(
        <div className="new-carona">
            <header>
                <nav>
                    <img src={Logo} alt="logo"/>
                    <ul className = 'adjust'>
                        <li><Link className = "button-profile-perfil" to='/profile/user'>Perfil</Link></li>
                        <li><Link className = "button-profile-logout" to='/profile'>Voltar</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="register-carona-container">
            <section className="register-form">
                <form onSubmit={handleRegisterS}>
                    <div className="register-submit">
                        <label htmlFor="">Cidade:</label>
                        <input type="text" value={cidade} onChange={e => setCidade(e.target.value)}/>
                        <label htmlFor="">Origem:</label>
                        <input type="text" value={origem} onChange={e => setOrigem(e.target.value)}/>
                        <label htmlFor="">Destino:</label>
                        <input type="text" value={destino} onChange={e => setDestino(e.target.value)}/>
                        <label htmlFor="">Comentario:</label>
                        <input type="text" value={comentario} onChange={e => setComentario(e.target.value)}/>
                        <label>Data e Horário de Saída:</label>
                        <DateTimePicker format="dd-MM-y h:m a" locale="pt-BR" value={datac} onChange={setDatac}/>
                        <label htmlFor="">tipo</label>
                        <select className='select' onChange={e => setTipo(e.target.value)}>
                            <option value="null">Selecione...</option>
                            <option value="Oferta">Oferta de Carona</option>
                            <option value="Pedido">Pedido de Carona</option>
                        </select>
                        <button type='submit' className='button-register'> Register </button>
                    </div>
                </form>
            </section>
            
        </div>
        </div>
    );
}
