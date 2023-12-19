import React ,{ useState } from "react";

const TabelaNomes = () => {
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
            <h2>Lista de Nomes</h2>
            <input
             type="text"
             value={novoNome}
             onChange={(e) => setNovoNome(e.target.value)}
             placeholder="Digite um nome"
            />

            <button onClick={adicionarNome}>Adicionar</button>

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

export default TabelaNomes;