import React from 'react';
import Col from '../Col';
import Row from '../Row';

function Table(props) {
    return (
        <Row>
            <Col size="sm-12" other="">
                <table className="table" {...props}></table>
            </Col>
        </Row>
    )
}

export default Table;