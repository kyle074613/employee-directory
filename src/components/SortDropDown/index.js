import React from 'react';
import Col from '../Col';

function SortDropDown(props) {
    return (
        <Col format="sm-4 text-center" id="sortCol">
            <label>Sort by Salary</label>
            <br />
            <select id="sort" defaultValue="Choose Sorting Method" onChange={props.changeSort}>
                <option disabled>Choose Sorting Method</option>
                <option>Ascending</option>
                <option>Descending</option>
            </select>

        </Col >
    );
}

export default SortDropDown;