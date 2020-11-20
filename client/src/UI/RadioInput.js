import React from 'react';

const RadioInput = ({value, sex, changeHandlerRadio}) => (
    <div className="row">
        <div className="input-field col m6 s12 offset-m3 offset-s0">
            <p>Sex</p>
            <div className='flex-row'>
                {
                    sex.map((sex, index) =>
                        <label key={index}>
                            <input onChange={e => changeHandlerRadio(e)} checked={value === sex}
                                   value={sex} name="group1" type="radio"/>
                            <span>{sex}</span>
                        </label>
                    )
                }
            </div>
        </div>
    </div>
);

export default RadioInput;