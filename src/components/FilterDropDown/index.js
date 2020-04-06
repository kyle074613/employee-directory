import React from 'react';
import Col from '../Col';

function FilterDropDown(props) {
    return (
        <Col size="sm-3" id="filterCol">
            <label >
                Filter by Department
                <select id="filter" onChange={props.changeDepartmentFilter}>
                    <option>None</option>
                    <option>IT</option>
                    <option>Customer Support</option>
                    <option>Security</option>
                </select>
            </label>
        </Col >
    )
}

export default FilterDropDown;