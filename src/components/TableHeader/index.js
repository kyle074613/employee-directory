import React from 'react';

function TableHeader(props) {
    return (
        <thead>
            <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Role</th>
                <th scope="col">Salary</th>
            </tr>
        </thead>
    )
}

export default TableHeader;