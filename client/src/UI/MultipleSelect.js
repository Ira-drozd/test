import React from 'react';

const MultipleSelect = ({value, options, selectHandler}) => (
    <div className="row">
        <div className="input-field col m6 s12 offset-m3 offset-s0">
            <select
                name={'department'}
                value={value}
                multiple={true}
                onChange={e => selectHandler(e)}
            >
                {
                    options.map((option, index) =>
                        <option key={index} value={option}>{option}</option>
                    )
                }
            </select>

            <label>Department</label>
        </div>
    </div>
);

export default MultipleSelect;