import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input } from "reactstrap";

const Question = ({ question, answerOptions }) => {
    console.log(question);
    return (
        <Container>
            <Row>
                <Col className="questionText"></Col>
            </Row>
            <FormGroup tag="fieldset">
                <legend>{question.questionText}</legend>
                {answerOptions.map((option, i) => (
                    <FormGroup check key={`${question.name}-${i}-key`}>
                        <Label check>
                            <Input type="radio" name={`${question.name}-option`} /> {option}
                        </Label>
                    </FormGroup>
                ))}
            </FormGroup>
        </Container>
    );
};

export default Question;
