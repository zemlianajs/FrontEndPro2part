import React, { Fragment, useState } from "react";
import ContactsTable from "./components/Contacts/ContactsTable";
import Form from "./components/Form/Form"

import { getList, changeItem, deleteItem, addItem } from "./services/contactsServise"

export default function App() {

  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    setContacts(await getList());
  }

  const changeContact = async (item) => {
    let changedItem = await changeItem(item.id, item);

    setContacts((prevState) =>
      prevState.map((element) => {
        if (element.id === item.id) element = changedItem;
        return element;
      })
    );
  };

  const deleteContact = async (id) => {
    await deleteItem(id);

    setContacts((prevState) => prevState.filter((item) => item.id !== id));
  };

  const addNewContact = async obj => {
    let newContact = await addItem(obj);

    setContacts(prevState => ([...prevState, newContact]))
  }

  return (
    <Fragment>
      <Form
        addNewContact={addNewContact}
      />
      <ContactsTable
        contacts={contacts}
        getContacts={getContacts}
        changeContact={changeContact}
        deleteContact={deleteContact}
      />
    </Fragment>
  );
}

