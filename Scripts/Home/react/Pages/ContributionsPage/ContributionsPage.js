import React from 'react';
import { Row, Col, Container, Form, FormGroup, Label, Input, Button, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import { User, Mail, Edit } from 'react-feather';
import { EmailContainer, EmailFieldsContainer, EmailTitlesContainer } from './ContributionPageStyles';
import { SubText, HeaderText } from '../Frontpage/frontpageStyles';

const ContributionsPage = ({ details, handleChange, onBlur, onSubmit, disableSubmit }) => {
    return (
        <>
            <EmailContainer>
                <Form>
                    <Row className="d-flex flex-column">
                        <EmailTitlesContainer>
                            <HeaderText>
                                Looking to help out? 
                             </HeaderText>
                            <SubText className="d-none d-md-flex">
                                    Please feel free to send us a message regarding anything you'd like to contribute (art, data, opinions, etc).
                             </SubText>
                        </EmailTitlesContainer>
                        <EmailFieldsContainer>
                        <Col >
                            <FormGroup>
                                <Label className="d-flex justify-content-start" for="name">Name</Label>
                                <InputGroup className="d-flex justify-content-center">
                                    <InputGroupAddon addonType="prepend">   
                                        <InputGroupText><User/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChange} value={details.name} onBlur={onBlur} />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label className="d-flex justify-content-start" for="email">Email</Label>
                                <InputGroup className="d-flex justify-content-center">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><Mail/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange} value={details.email} onBlur={onBlur} />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label className="d-flex justify-content-start" for="emailSubject">Subject</Label>
                                <InputGroup className="d-flex justify-content-center">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><Edit/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" name="emailSubject" id="emailSubject" placeholder="Subject of message" onChange={handleChange} value={details.emailSubject} onBlur={onBlur} />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label className="d-flex justify-content-start" for="emailMessage">Message</Label>
                                <Input type="textarea" name="emailMessage" id="emailMessage" placeholder="Type your message" onChange={handleChange} value={details.emailMessage} onBlur={onBlur} />
                            </FormGroup>
                            </Col>
                         </EmailFieldsContainer>
                    </Row>
                </Form>
                <Button color="primary" onClick={onSubmit} type="button" disabled={disableSubmit}> Send </Button>
            </EmailContainer>
        </>

        );
}

export default ContributionsPage;
