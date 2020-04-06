import React from 'react';

function TableRow(props) {

    return (
        <tr>
            <th scope="row">{props.name}</th>
            <td>{props.department}</td>
            <td>{props.role}</td>
            <td>{props.salary}</td>
        </tr>
    );
}

export default TableRow;