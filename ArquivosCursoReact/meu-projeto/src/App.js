import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import MyButton from './components/MyButton';

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
    </div>
  );
}

export default App;
