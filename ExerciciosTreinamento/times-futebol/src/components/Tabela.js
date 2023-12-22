import React ,{ useState } from "react";
const Tabela = () => {

    const[nomes, setNomes] = useState([]);
    const[novoNome, setNovoNome] = useState('');
    const adicionarNome = () => {
        if (novoNome.trim() !== '') {
            setNomes([...nomes, novoNome]);
            setNovoNome('');
        }
    };

    const[times, setTimes] = useState([]);
    const[novoTime, setNovoTime] = useState('');
    const adicionarTime = () => {
        if (novoTime.trim() !== '') {
            setTimes([...times, novoTime]);
            setNovoTime('');
        }
    };

    const limparLista = () => {
        setNomes([]);
        setTimes([]);
    };

 return (
    <div>
      <h2>Registro de Jogadores</h2>
       <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite o nome do jogador"
       />
       <input
        type="text"
        value={novoTime}
        onChange={(e) => setNovoTime(e.target.value)}
        placeholder="Digite o nome do time"
       />
       
      <button onClick={adicionarNome}>
        Adicionar jogador
      </button>
      <button onClick={adicionarTime}>
        Adicionar Time
      </button>
      <button onClick={limparLista}>
        Limpar a lista
      </button>

        <table>
            <thead>
                <tr>
                    <th>Jogador</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {nomes.map((nome, index) => (
                    <tr key={index}>
                         <td>{nome}</td>
                    </tr>
                ))}
                {times.map((time, index) => (
                    <tr key={index}>
                         <td>{time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
 );
};
 export default Tabela;