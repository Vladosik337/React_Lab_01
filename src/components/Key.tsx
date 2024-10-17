import React from 'react';

const Key = ({ value, onClick }) => {
    return (
        <button
            className="w-[40px] h-[40px] pointer-events-auto bg-[#FFFF] rounded-md"
            onClick={() => onClick(value)}
        >
            {value}
        </button>
    );
};

export default Key;
