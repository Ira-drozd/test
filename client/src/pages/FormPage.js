import React, {useCallback, useEffect, useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import TextInput from "../UI/TextInput";
import RadioInput from "../UI/RadioInput";
import CheckboxInput from "../UI/CheckboxInput";
import MultipleSelect from "../UI/MultipleSelect";
import axiox from 'axios'

const FormPage = ({history, location}) => {

    const getParamsURL = useCallback(() => {
        let params = new URLSearchParams(location.search).entries()
        let objParams = {}
        const separators = ['\\\|', ','];
        for (let pair of params) {
            if (pair[0] === 'department' || pair[0] === 'skills') {
                objParams[pair[0]] = pair[1].split(new RegExp(separators.join('|'), 'g'))
            } else {
                objParams[pair[0]] = pair[1]
            }
        }
        return objParams
    }, [location])


    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        sex: '',
        skills: [],
        department: []
    }

    const [queryURL, SetQueryURL] = useState(location.search)

    const [form, setForm] = useState({...initialState, ...getParamsURL()})

    useEffect(() => {
        setForm({...initialState, ...getParamsURL()})
        SetQueryURL(location.search)
    }, [location])


    useEffect(() => {
        M.AutoInit()
    }, [])

    const changeHandlerTextFiled = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const changeHandlerRadio = event => {
        setForm({...form, sex: event.target.value})
    }

    const changeHandlerCheckbox = event => {
        let newArray = [...form.skills, event.target.value];
        if (form.skills.includes(event.target.value)) {
            newArray = newArray.filter(day => day !== event.target.value);
        }
        setForm({...form, skills: newArray})
    };

    const selectHandler = event => {
        let options = event.target.options;
        let selectedOptions = [];

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedOptions.push(options[i].value);
            }
        }
        setForm({...form, [event.target.name]: selectedOptions})
    }

    const submitHandler = async () => {
        try {
            const response = await axiox({
                method: 'post',
                url: '/api/form',
                data: {...form},
            })

            console.log(response.data)
            history.push(response.data.url)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className={'container'}>
            <p>Task 1: server and browser console.log</p>

            <p>Task 2,3: (at current query you can use | or , for department and skills)</p>
            {queryURL}

            <TextInput
                value={form.firstname}
                label={'First name'}
                name={'firstname'}
                changeHandlerTextFiled={changeHandlerTextFiled}
            />
            <TextInput
                value={form.lastname}
                label={'Last name'}
                name={'lastname'}
                changeHandlerTextFiled={changeHandlerTextFiled}
            />
            <TextInput
                value={form.email}
                label={'Email'}
                name={'email'}
                type={'email'}
                changeHandlerTextFiled={changeHandlerTextFiled}
            />
            <TextInput
                value={form.phone}
                label={'Phone number'}
                name={'phone'}
                type={'tel'}
                changeHandlerTextFiled={changeHandlerTextFiled}
            />
            <RadioInput
                value={form.sex}
                sex={['Male', 'Female']}
                changeHandlerRadio={changeHandlerRadio}
            />
            <CheckboxInput
                value={form.skills}
                skills={['HTML', 'CSS', 'JavaScript', 'AJAX']}
                changeHandlerCheckbox={changeHandlerCheckbox}
            />
            <MultipleSelect
                value={form.department}
                options={["FrontEnd", "SalesForce", "Sharepoint"]}
                selectHandler={selectHandler}
            />

            <div className="row">
                <div className="col m6 s12 offset-m3 offset-s0 center-align">
                    <button onClick={submitHandler} className="btn waves-effect waves-light"
                            name="action">Submit
                    </button>
                </div>
            </div>

        </div>
    )
};

export default FormPage;