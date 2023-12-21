import React, { useState } from 'react';
import './App.css';
import './index.css';
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
      <div className="team-container" id="team-container">
        <div className="team-container-vasco" id="team-container">
          <img src="public/imgs/vasco.png" alt="vasco"/>
        </div>
        <div className="team-container-liverpool" id="team-container">
          <img src="public/imgs/liverpool.png" alt="liverpool"/>
        </div>
        <div className="team-container-sporting" id="team-container">
          <img src="public/imgs/sporting.png" alt="sporting"/>
        </div>
        <div className="team-container-napoli" id="team-container">
          <img src="public/imgs/napoli.png" alt="napoli"/>
        </div>
        {selTeam && (
          <div className="team-info">
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
    </div>
  );
}

export default App;
