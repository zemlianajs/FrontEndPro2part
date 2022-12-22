import React, { useEffect } from "react";
import "./style.sass";
// import Name from './Name';
// import Surname from './Surname';
// import Married from './Married';
// import Actions from './Actions/Actions';

export default function Contacts(getContacts, contacts) {
    
    useEffect (() => {
        getContacts()
    }, [])

    return (
        <ul>
            {contacts.map((el) => (
                <li key={el.id}>{el.name}</li>
            ))}
        </ul>
        // <table className='table'>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Surname</th>
        //             <th>Married</th>
        //             <th>Actions</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             {contacts.map((el) => (
        //                 <td key={el.id}>{el.name}</td>
        //                 // <Name key={el.id} name={el.name}/>
        //                 // <Surname surname={el.surname}/>,
        //                 // <Married married={el.married}/>,
        //                 // <Actions />
        //             ))}
        //         </tr>
        //     </tbody>
        // </table>
    );
}

