import React, { useState } from "react";
import Contacts from "./components/Contacts/Contacts.jsx";

import {getList} from "./services/contactsServise.js";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    setContacts(await getList())
  }

  return (
    <div>
      <Contacts 
        contacts={contacts}
        getContacts={getContacts} />
    </div>
  );
}

