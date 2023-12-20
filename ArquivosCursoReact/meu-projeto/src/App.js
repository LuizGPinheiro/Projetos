import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import MyButton from './components/MyButton';
import NewButton from './components/NewButton';
import TabelaNomes from './components/TabelaNomes';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Luiz Gustavo'
  const newName = name.toUpperCase()

  function sum(a ,b) {
    return a + b
  }

  const url = "https/via.placeholder.com/150"

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      <MyButton/>
      <NewButton/>
      <TabelaNomes/>
      <SayMyName nome="Luiz"/>
      <Pessoa
      foto="https/via.placeholder.com/150"
      nome="Luiz"
      idade="29"
      profissao="Engenheiro de Software"
      />
    </div>
  );
}

export default App;
