import React, { useState } from 'react';

const MyButton = () => {
    const [mensagem, setMensagem] = useState('');

    const handleClick = () => {
      setMensagem('O seu componente está funcionando');
    };

    return (
    <div>
        <button onClick={handleClick}> Clique aqui!</button>
        <p>{mensagem}</p>
    </div>
    );
};

export default MyButton;