import React from 'react';

const Button = ( {team, onClick} ) => {

    return (
            <button 
            style={{
                backgroundColor: '#ddd9d8',
                color: '#000000',
                padding: '10px 15px',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
            }}
                onClick={onClick}>
                    Clique aqui para ver Informações do {team}
            </button>
    );
};

export default Button;