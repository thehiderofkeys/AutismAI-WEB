import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input } from "reactstrap";

const Question = ({ question, answerOptions }) => {
    console.log(question);
    return (

        <Container>
            <Row className="align-items-center">
                <Col className="d-flex justify-content-center">
                    <FormGroup tag="fieldset">
                        <legend>{question.questionText}</legend>
                        {answerOptions.map((option, i) => (
                            <FormGroup check key={`${question.name}-${i}-key`}>
                                <Row className="mt-3 border rounded mw-100 ">
                                    <Label check className="ml-4">
                                        <Input type="radio"  name={`${question.name}-option`} /> {option}
                                    </Label>
                                </Row>
                            </FormGroup>
                        ))}
                    </FormGroup>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Question;
