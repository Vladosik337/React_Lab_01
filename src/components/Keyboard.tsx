import React from 'react';
import Key from "./Key.tsx";


const Keyboard = ({ onKeyPress }) => {
    const keys:string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

    return (
        <div className="flex flex-wrap gap-[10px]">
            {keys.map((key) => (
                <Key
                    key={key}
                    value={key}
                    onClick={onKeyPress}
                />
            ))}
        </div>
    );
};

export default Keyboard;

