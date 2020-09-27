import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input } from "reactstrap";

const Question = ({ question, handleChange, questionAnswers, currentQuestion }) => {
    const onClick = (event) => {
        handleChange({ question: question.name, answer: event.target.value });
    };

    return (
        <Container className="d-flex justify-content-center">
            <Col
                style={{
                    maxWidth: "50%",
                    backgroundColor: "#ebf0ff",
                    borderRadius: "15px"
                }}
            >
                <FormGroup tag="fieldset">
                    <legend>{question.questionText}</legend>
                    {question.answerSet.map((option, i) => (
                        <Row
                            className="mt-3 border rounded d-flex justify-content-left"
                            style={{
                                width: "100%",
                                height: "calc(1.5em + .75rem + 2px)",
                                padding: ".375rem .75rem",
                                marginLeft: "0",
                                backgroundColor: "#fff"
                            }}
                            key={`${question.name}-option-${i}`}
                        >
                            <Label
                                check
                                className="ml-4"
                                style={{
                                    width: "100%"
                                }}
                            >
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
                    ))}
                </FormGroup>
            </Col>
        </Container>
    );
};

export default Question;
