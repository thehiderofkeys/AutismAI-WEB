import React from 'react';
import { Row, Col, Container, Form, FormGroup, Label, Input} from 'reactstrap';

const ContributionsPage = ({ onClick }) => {
    return (
        <>
            <button onClick={onClick} type="button"> Click </button>
            <div>Contributions</div>

            <Container>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>

        );
}

export default ContributionsPage;
