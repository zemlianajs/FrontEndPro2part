import React from 'react';

import {FILTER_STATUS, FILTER_MARRIED, FILTER_NOT_MARRIED} from "../../constants/table"

function Filter({filter, setFilter}) {

    const handleChange = e => setFilter(e.target.value);

    return (
        <select className='select' defaultValue={FILTER_STATUS} onChange={handleChange}>
            <option value={FILTER_STATUS}>"Married" status</option>
            <option value={FILTER_MARRIED}>Married</option>
            <option value={FILTER_NOT_MARRIED}>Not married</option>
        </select>
    );
}

export default Filter;