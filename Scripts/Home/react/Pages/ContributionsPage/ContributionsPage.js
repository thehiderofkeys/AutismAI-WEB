import React from 'react';
import { Row, Col, Container, Form, FormGroup, Label, Input} from 'reactstrap';

const ContributionsPage = ({ details, handleChange, onBlur }) => {
    return (
        <>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChange} value={details.name} onBlur={onBlur} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter your Email address" onChange={handleChange} value={details.email} onBlur={onBlur} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="emailSubject">Subject</Label>
                                <Input type="text" name="emailSubject" id="emailSubject" placeholder="Subject of message" onChange={handleChange} value={details.emailSubject} onBlur={onBlur} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="emailMessage">Message</Label>
                                <Input type="textarea" name="emailMessage" id="emailMessage" placeholder="Type your message" onChange={handleChange} value={details.emailMessage} onBlur={onBlur} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>

        );
}

export default ContributionsPage;
