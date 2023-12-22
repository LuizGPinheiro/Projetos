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

 return (
    <div>
      <h2>Registro de Jogadores</h2>
       <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite o nome do jogador"
       />
      <button onClick={adicionarNome}>
        Adicionar jogador
      </button>

        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                {nomes.map((nome, index) => (
                    <tr key={index}>
                         <td>{nome}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
 );
};
 export default Tabela;