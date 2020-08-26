/* Third Party */
import React from 'react';
import { Row, Col } from 'reactstrap';

/* Components */


/* Functions */

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Center className="d-flex justify-content-around">
                <Row className="mr-5">
                    <Col className="align-middle">
                        Left
                    </Col>
                </Row>

                <Row className="ml-5">
                    <Col className="align-middle">
                    Right
                    </Col>
                </Row>
            </Center>
        );
    }
}



export default Header;
