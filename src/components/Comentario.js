import React from 'react';
import './Comentario.css'
import imagemUsuario from './user.png';

// JSX
const Comentario = props => {
    return <div className="Comentario">
        <img class="avatar" src={imagemUsuario} alt={props.nome} />
        <div class="conteudo">
            <h2 
                class="nome">{props.nome}
            </h2>
            <p 
                class="email">{props.email}
            </p>
            <div 
                class="mensagem">{props.children}
            </div>
            <div 
                class="data">{props.data}
            </div>
            <button 
                onClick={props.onRemove}>&times;
            </button>
        </div>
    </div>
}

export default Comentario;