import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input } from "reactstrap";

const Question = ({ question, answerOptions, handleChange, questionAnswers, currentQuestion }) => {

    const onClick = (event) => {
        handleChange({ question: question.name, answer: event.target.value });
    };

    return (
        <Container className="d-flex justify-content-center">
            <Col style={{ maxWidth: '50%' }}>
                    <FormGroup tag="fieldset">
                        <legend>{question.questionText}</legend>
                        {answerOptions.map((option, i) => (
                            <Row className="mt-3 border rounded d-flex justify-content-left" style={{
                                width: '100%',
                                height: 'calc(1.5em + .75rem + 2px)',
                                padding: '.375rem .75rem',
                                marginLeft: '0'
                            }}>
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
                        ))}
                    </FormGroup>
                </Col>
        </Container>
    );
};

export default Question;
