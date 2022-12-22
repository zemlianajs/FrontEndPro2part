import React from 'react';
import DeleteBtn from './DeleteBtn';
import SaveBtn from './SaveBtn';

function Actions(props) {
    return (
        <td>
            <SaveBtn />
            <DeleteBtn />
        </td>
    );
}

export default Actions;