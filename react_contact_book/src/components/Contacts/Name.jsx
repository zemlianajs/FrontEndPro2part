import React from 'react';

function Name(name) {
    return (
        <td>
            <input type="text" defaultValue={name}/>
        </td>
    );
}

export default Name;