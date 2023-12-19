import React, { useState } from 'react';

const NewButton = () => {
    const[mensagem, setMensagem] = useState('');

    const handleClick = () => {
        setMensagem((mensagemAtual) => (mensagemAtual === '' ? 'Mensagem visível!' : ''));
    };

    return (
        <div>
            <button onClick={handleClick}>Clique para ver/ocultar a mensagem!</button>
            <p>{mensagem}</p>
        </div>
    );
}

export default NewButton;