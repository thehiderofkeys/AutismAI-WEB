import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input } from "reactstrap";

const Question = ({ questionText, answerOptions }) => {

    const radioItems = []

    for (const [index, value] of answerOptions.entries()) {
        let name = "radio" + index 
        radioItems.push(
            <Container>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name={name} />{' '}
                        {value}
                    </Label>
                </FormGroup>
            </Container>
            )
    }

    return (
        <Question>
            <Container>
                <Row>
                    <Col className="questionText">
                    </Col>
                </Row>
                <FormGroup tag="fieldset">
                    <legend>{questionText}</legend>
                    {radioItems}
                </FormGroup>
            </Container>
        </Question>
);
}