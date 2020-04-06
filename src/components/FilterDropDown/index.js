import React from 'react';
import Col from '../Col';

function FilterDropDown(props) {
    return (
        <Col format="sm-4 text-center" id="filterCol">
            <label htmlFor="filter">Filter by Department</label>
            <br />
            <select id="filter" onChange={props.changeDepartmentFilter}>
                <option>None</option>
                <option>IT</option>
                <option>Customer Support</option>
                <option>Security</option>
            </select>
        </Col >
    )
}

export default FilterDropDown;