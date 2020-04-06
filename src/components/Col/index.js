import React from "react";

function Col(props) {
    let name;

    if (props.format)
        name = `col ${props.format}`
    else
        name = "col"

    return (
        <div className={name} {...props}></div>
    );
}

export default Col;