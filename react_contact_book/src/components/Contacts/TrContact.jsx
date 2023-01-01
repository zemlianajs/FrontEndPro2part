import React, { useState } from 'react';
import ActionsButtons from './ActionsButtons';

import { NAME, SURNAME, FILTER_STATUS } from "../../constants/table"

function TrContact({ item, changeContact, deleteContact }) {
    const [newValue, setNewValue] = useState(item);

    const modifyContact = (key, value) => {
        setNewValue((prevState => ({ ...prevState, [key]: value })))
    }

    const handleInput = (e) => modifyContact(e.target.name, e.target.value);
    const handleCheckbox = (e) => modifyContact(e.target.name, e.target.checked);

    return (
        <tr>
            <td>
                <input type="text"
                    name={NAME}
                    defaultValue={item.name}
                    required
                    onChange={handleInput}
                />
            </td>
            <td>
                <input type="text"
                    name={SURNAME}
                    defaultValue={item.surname}
                    required
                    onChange={handleInput}
                />
            </td>
            <td>
                <input type="checkbox"
                    name={FILTER_STATUS}
                    defaultChecked={item.married}
                    onChange={handleCheckbox}
                />
            </td>
            <ActionsButtons
                item={newValue}
                changeContact={changeContact}
                deleteContact={deleteContact}
            />
        </tr>
    );
}

export default TrContact;