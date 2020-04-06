import React from 'react';

function Row(props) {
    let name;

    if (props.format)
        name = `row ${props.format}`
    else
        name = "row"

    return (
        <div className={name} {...props} />
    );
}

export default Row