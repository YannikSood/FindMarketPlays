import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { receiveSort } from '../../actions/sort'

const Sort = ( {receiveSort} ) => {
    const handleSubmit = (sortType) => {
        if (sortType === "Recent") {
            receiveSort("Recent");
        } else if (sortType === "Oldest") {
            receiveSort("Oldest");
        } else if (sortType === "Greatest") {
            receiveSort("Greatest");
        } else if (sortType === "Least") {
            receiveSort("Least");
        }
    }

    return (
        <Container className="m-0">
            <Dropdown className="ml-2">
                <Dropdown.Toggle variant="secondary">
                    Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleSubmit("Recent")}>
                        Recent
                        </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSubmit("Oldest")}>
                        Oldest
                        </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSubmit("Least")}>
                        Least cost basis
                        </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSubmit("Greatest")}>
                        Greatest cost basis
                        </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}

const MDTP = dispatch => ({ 
    receiveSort: (sort) => dispatch(receiveSort(sort))
});

export default connect(null, MDTP)(Sort);