import React from "react";

function Col(props) {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    const fullClassName = size + ' ' + props.other;

    return (
        <div className={fullClassName} {...props}></div>
    );
}

export default Col;