import React, { useState, useEffect, useMemo } from "react";
import "./style.sass";

import {FILTER_STATUS, FILTER_MARRIED, FILTER_NOT_MARRIED } from "../../constants/table"

import TrContact from "./TrContact";
import Filter from "./Filter"

export default function ContactsTable({ contacts, getContacts, changeContact, deleteContact }) {
    const [filter, setFilter] = useState(localStorage.getItem(`filter`) ? localStorage.getItem(`filter`) : FILTER_STATUS);

    useEffect(() => {
        getContacts();
    }, []);

    const getFilteredContacts = () => {
        return contacts.filter(item => {
            if (filter === FILTER_STATUS) return item;
            if (filter === FILTER_MARRIED) return item.married;
            if (filter === FILTER_NOT_MARRIED) return !item.married;
        })
    }

    const contactsFiltered = useMemo(() => getFilteredContacts(), [contacts, filter])

    useEffect(() => {
        localStorage.setItem(`filter`, filter);
    }, [filter])

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>
                        <Filter filter={filter} setFilter={setFilter} />
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contactsFiltered.map((el) => (
                    <TrContact key={el.id}
                        item={el}
                        changeContact={changeContact}
                        deleteContact={deleteContact}
                    />
                ))}
            </tbody>
        </table>
    );
}

