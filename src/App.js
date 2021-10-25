import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {
  state = {
    comentarios: [{
      nome: 'João',
      email: 'joao@email.com',
      data: new Date(2020, 3, 19).toLocaleDateString(),
      mensagem: 'Olá, tudo bem'
    },
    {
      nome: 'Maria',
      email: 'Maria@email.com',
      data: new Date(2020, 3, 19).toLocaleDateString(),
      mensagem: 'Estou sim e você?'
    }],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }
  
  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = {
      nome: '',
      email: '',
      mensagem: ''
    }

    this.setState ({
      comentarios: [...this.state.comentarios, { 
        ...this.state.novoComentario, 
        data: new Date().toLocaleDateString(),
      }],
      novoComentario: novoComentario
    })
  }

  onChangeFormulario = evento => {
    const { name, value } = evento.target;
    this.setState({ 
      novoComentario: {...this.state.novoComentario, [name]: value}
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, index) => (
          <Comentario 
            key={index}
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar comentario</h2>
          <div>
            <input 
              type="text" 
              name="nome" 
              value={this.state.novoComentario.nome}
              onChange={this.onChangeFormulario}
              placeholder="Digite seu nome"/>
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              value={this.state.novoComentario.email} 
              onChange={this.onChangeFormulario}
              placeholder="Digite seu email"/>
          </div>
          <div>
            <textarea 
              name="mensagem" 
              value={this.state.novoComentario.mensagem}
              onChange={this.onChangeFormulario}
              rows="4"/>
          </div>
          <button 
              type="submit"> Adicionar comentário </button>
        </form>
      </div>
    );
  }
}

export default App;
