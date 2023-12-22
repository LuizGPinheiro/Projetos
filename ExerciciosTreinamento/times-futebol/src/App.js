import React, { useState } from 'react';
import './App.css';
import './index.css';
import Button from './components/Button';
import Tabela from './components/Tabela';

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

      <div className="team-container" id="team-container">
        <div className="team-container-vasco" id="team-container">
          <img src="/imgs/vasco.png" alt="vasco"/>
          <Button team="Vasco" onClick={() => handleButtonClick('vasco')}/>
        </div>
        <div className="team-container-liverpool" id="team-container">
          <img src="/imgs/liverpool.png" alt="liverpool"/>
          <Button team="Liverpool" onClick={() => handleButtonClick('liverpool')}/>
        </div>
        <div className="team-container-sporting" id="team-container">
          <img src="/imgs/sporting.png" alt="sporting"/>
          <Button team="Sporting" onClick={() => handleButtonClick('sporting')}/>
        </div>
        <div className="team-container-napoli" id="team-container">
          <img src="/imgs/napoli.png" alt="napoli"/>
          <Button team="napoli" onClick={() => handleButtonClick('napoli')}/>
        </div>
      </div>

      {selTeam && (
          <div className="team-info">
            <h2>{teamData[selTeam].nome}</h2>
            <p>Nome do Técnico: {teamData[selTeam].treinador}</p>
            <p>Estádio: {teamData[selTeam].estadio}</p>
          </div>
        )}
      <Tabela/>
    </div>
  );
}

export default App;
