import React from 'react';

function ActionsButtons({ item, changeContact, deleteContact }) {

    const handleSave = () => changeContact(item);
    const handleDelete = () => deleteContact(item.id);

    return (
        <td>
            <button
                className='btn'
                onClick={handleSave}>
                Save changes
            </button>
            <button
                className='btn'
                onClick={handleDelete}>
                Delete
            </button>
        </td>
    );
}

export default ActionsButtons;