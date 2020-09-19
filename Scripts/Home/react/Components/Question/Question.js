import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input } from "reactstrap";

const Question = ({ question, answerOptions, handleChange, questionAnswers, currentQuestion }) => {

    const onClick = (event) => {
        handleChange({ question: question.name, answer: event.target.value });
    };

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
                                        <Input
                                            type="radio"
                                            onChange={onClick}
                                            name={`${question.name}-option`}
                                            value={option}
                                            checked={questionAnswers[question.name] === option}
                                        />{" "}
                                        {option}
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
