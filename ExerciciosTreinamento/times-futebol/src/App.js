import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const teamData = {
    vasco: {
      nome: "Club de Regatas Vasco da Gama",
      treinador: "Ramón Díaz",
      estadio: "São Januário",
    },
    liverpool: {
      nome: "Liverpool Football Club",
      treinador: "Jürgen Klopp",
      estadio: "Anfield",
    },
    sporting: {
      nome: "Sporting Clube de Portugal",
      treinador: "Rúben Amorim",
      estadio: "Estádio José Alvalade"
    },
    napoli: {
      nome: "Società Sportiva Calcio Napoli",
      treinador: "Walter Mazzarri",
      estadio: "Stadio Diego Armando Maradona"
    },
  };

  const [selTeam, setSelTeam] = useState(null);

  const handleButtonClick = (team) => {
    setSelTeam(team);
  };

  return (
    <div className="App">
      <h1>Melhores Times de Futebol</h1>
      <img src="public/imgs/vasco.png" alt="vasco"/>
      <img src="public/imgs/liverpool.png" alt="liverpool"/>
      <img src="public/imgs/sporting.png" alt="sporting"/>
      <img src="public/imgs/napoli.png" alt="napoli"/>
      {selTeam && (
        <div>
          <h2>{teamData[selTeam].nome}</h2>
          <p>Nome do Técnico: {teamData[selTeam].treinador}</p>
          <p>Estádio: {teamData[selTeam].estadio}</p>
        </div>
      )}
      <Button team="Vasco" onClick={() => handleButtonClick('vasco')}/>
      <Button team="Liverpool" onClick={() => handleButtonClick('liverpool')}/>
      <Button team="Sporting" onClick={() => handleButtonClick('sporting')}/>
      <Button team="Napoli" onClick={() =>handleButtonClick('napoli')}/>
    </div>
  );
}

export default App;
