import React from 'react';

function ActionsButtons ({item, changeContact}) {

    const handleSave = () => changeContact(item);

    return (
        <td>
            <button
            onSubmit={handleSave}>Save changes</button>
            <button>Delete</button>
        </td>
    );
}

export default ActionsButtons;