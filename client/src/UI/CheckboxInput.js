import React from 'react';

const CheckboxInput = ({value, skills, changeHandlerCheckbox}) => (
    <div className="row">
        <div className="input-field col m6 s12 offset-m3 offset-s0">
            <p>Skills</p>
            <div className='flex-row'>
                {
                    skills.map((skill, index) =>
                        <label key={index}>
                            <input type="checkbox" checked={value.includes(skill)}
                                   onChange={e => changeHandlerCheckbox(e)} value={skill} className="filled-in"/>
                            <span>{skill}</span>
                        </label>
                    )
                }
            </div>
        </div>
    </div>
);

export default CheckboxInput;