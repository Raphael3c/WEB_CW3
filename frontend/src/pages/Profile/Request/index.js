import React, {useState, useEffect} from 'react';

import {Link, useHistory} from 'react-router-dom';

import {FiMail} from 'react-icons/fi';

import api from '../../../services/api';

import Logo from '../../../assets/logo1.svg'

export default function Profile(){
    const [carona, setCarona] = useState([]);
    const userName = localStorage.getItem('userName');

    const history = useHistory();

    useEffect(() => {
        api.get('caronas', { params: { tipo:'Pedido' } }).then(response => {
            setCarona(response.data);
        })
    }, [])

    function handleLogout(){
        localStorage.clear();

        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <nav>
                    <div>
                        <img src={Logo} alt="logo"/>
                        <span>Ofereça ou Peça uma carona, {userName}!</span>
                    </div>
                    <ul>
                        <li><Link className = "button-profile-carona" to='/caronas/new'>Caronas</Link></li>
                        <li><Link className = "button-profile-perfil" to='/profile'>Perfil</Link></li>
                        <li><button className="button-profile-logout" onClick={handleLogout}>Logout</button></li>
                    </ul>
                </nav>
            </header>
            <div className="buttons-filter">
                <Link className="button-profile-carona" to='/offer'>Ofertas</Link>
                <Link className="button-profile-pedidos" to='/profile'>Voltar</Link>
            </div>
            <div className='table'>
                <table border = '2'>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Comentario</th>
                            <th>Data Oferta/Pedido</th>
                            <th>Tipo</th>
                            <th>Enviar Mensagem</th>
                        </tr>
                    {carona.map(carona => (
                        <tr key={carona.id}>
                            <td>{carona.name}</td>
                            <td>{carona.cidade}</td>
                            <td>{carona.origem}</td>
                            <td>{carona.destino}</td>
                            <td width='200'>{carona.comentario}</td>
                            <td>{carona.data}</td>
                            <td>{carona.tipo}</td>
                            <td><a target="_blank" href={`https://wa.me/55${carona.wpp}`}><FiMail></FiMail></a></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}