import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

const Sort = () => {

    
    return (
        <Container>
            <Dropdown className="ml-2">
                <Dropdown.Toggle variant="secondary">
                    Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        Recent
                        </Dropdown.Item>
                    <Dropdown.Item>
                        Oldest
                        </Dropdown.Item>
                    <Dropdown.Item>
                        Greatest cost basis
                        </Dropdown.Item>
                    <Dropdown.Item>
                        Least cost basis
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