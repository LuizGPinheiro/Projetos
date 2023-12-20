/* function Pessoa(props) {
    return (
        <div>
            <img src={props.foto} alt={props.nome}></img>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    );
}

export default Pessoa; */

function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <img src={foto} alt={nome}></img>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão {profissao}</p>
        </div>
    );
}

export default Pessoa;