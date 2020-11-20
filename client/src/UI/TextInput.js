import React from 'react';

const TextInput = ({value, name, label, changeHandlerTextFiled, type}) => (
    <div className="row">
        <div className="input-field col m6 s12 offset-m3 offset-s0">
            <input
                type={type || "text"}
                id={name}
                name={name}
                value={value}
                onChange={e => changeHandlerTextFiled(e)}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    </div>
);

export default TextInput;