import React, { useEffect, useState } from "react";
import "./style.sass";

import ActionsButtons from "./ActionsButtons"

import { getList, changeItem } from "../../services/contactsServise";

export default function ContactsTable() {
    const [contacts, setContacts] = useState([]);
    const [newValue, setNewValue] = useState({ // створила нову змінну, хоча розумію що не треба
        name: ` `,
        surname: ` `,
        married: false
    })

    useEffect(() => {
        (async () => {
            setContacts(await getList());
        })();
    }, []);

//тут додаю в нову змінну значення, але не розумію як ці значення оновити в contacts
    const modifyContact = (key, value) => {
        setNewValue((prevState => ({...prevState, [key]: value})))
    }

    const handleInput = (e) => modifyContact(e.target.name, e.target.value);
    const handleCheckbox = (e) => modifyContact(e.target.name, e.target.checked);

    const changeContact = async (item) => {
        let changedItem = await changeItem(item.id, item);

        setContacts((prevState) =>
            prevState.map((element) => {
                if (element.id === item.id) element = changedItem;
                return element;
            })
        );
    };

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Married</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((el) => (<tr key={el.id}>
                    <td>
                        <input type="text"
                            name="name"
                            defaultValue={el.name}
                            required
                            onChange={handleInput} />
                    </td>
                    <td>
                        <input type="text"
                            name="surname"
                            defaultValue={el.surname}
                            required
                            onChange={handleInput} />
                    </td>
                    <td>
                        <input type="checkbox"
                            name="married"
                            defaultChecked={el.married}
                            onChange={handleCheckbox} />
                    </td>
                    <ActionsButtons item={newValue}
                        changeContact={changeContact} />
                </tr>))}
            </tbody>
        </table>
    );
}

