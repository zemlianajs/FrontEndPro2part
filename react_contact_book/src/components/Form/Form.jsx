import React, { useState } from 'react';
import "./style.sass";

function Form({ addNewContact }) {
    const [newContact, setNewContact] = useState({});

    const addValueNewContact = (key, value) => {
        setNewContact((prevState => ({ ...prevState, [key]: value })))
    }

    const handleInput = (e) => addValueNewContact(e.target.name, e.target.value);
    const handleCheckbox = (e) => addValueNewContact(e.target.name, e.target.checked);

    const handleAddContact = e => {
        e.preventDefault();
        addNewContact(newContact);
    }

    return (
        <form
            className='form'
            onSubmit={handleAddContact}>
            <label>
                Name
                <input name="name" type="text"
                    onChange={handleInput}
                    required
                />
            </label>
            <label>
                Surname
                <input name='surname' type="text"
                    onChange={handleInput}
                    required />
            </label>
            <label>
                Married
                <input name='married' className='checkbox' type="checkbox"
                    onChange={handleCheckbox}
                />
            </label>
            <button>Add contact</button>
        </form>
    );
}

export default Form;