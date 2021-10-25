import React from 'react';
import './Comentario.css'

// JSX
const Comentario = props => {
    return <div className="Comentario">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <div>{props.children}</div>
        <div>{props.data}</div>
    </div>
}

export default Comentario;