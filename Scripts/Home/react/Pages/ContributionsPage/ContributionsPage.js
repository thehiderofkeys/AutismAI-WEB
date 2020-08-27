import React from 'react';
import { Row, Col, Container, Form, FormGroup, Label, Input} from 'reactstrap';

const ContributionsPage = ({ onClick }) => {
    return (
        <>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="name" name="name" id="name" placeholder="Enter your name" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter your Email address" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="emailSubject">Subject</Label>
                                <Input type="emailSubject" name="emailSubject" id="emailSubject" placeholder="Subject of message" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="emailMessage">Message</Label>
                                <Input type="emailMessage" name="emailMessage" id="emailMessage" placeholder="Type your message" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>

        );
}

export default ContributionsPage;
