import React from 'react';

const Button = ( {team, onClick} ) => {

    return (
            <button onClick={onClick}>
                Clique aqui para ver Informações do {team}
            </button>
    );
};

export default Button;