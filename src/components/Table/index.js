import React from 'react';
import Col from '../Col';
import Row from '../Row';

function Table(props) {
    return (
        <Row>
            <Col size="md-12" other="text-center">
                <table className="table" {...props}></table>
            </Col>
        </Row>
    )
}

export default Table;