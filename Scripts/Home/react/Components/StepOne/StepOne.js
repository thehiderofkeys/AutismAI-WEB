﻿import React from "react";
import {
    Row,
    Col,
    Container,
    FormGroup,
    Label,
    legend,
    Input,
    ButtonGroup,
    Button
} from "reactstrap";

const StepOne = ({ handleChange, details, ethnicities, handleClick }) => {

    return (
        <Container className="d-flex justify-content-center">
            <Col style={{ maxWidth: "50%" }}>
                <FormGroup tag="fieldset">
                    <legend>Gender</legend>
                    <ButtonGroup>
                        <Button
                            className="bg-white text-dark"
                            style={{ border: "1px solid #ced4da" }}
                            value={"Male"}
                            onClick={(e) => {
                                handleClick("gender", e);
                            }}
                        >
                            Male
                        </Button>
                        <Button
                            className=" bg-white text-dark"
                            style={{ border: "1px solid #ced4da" }}
                            value={"Female"}
                            onClick={(e) => {
                                handleClick("gender", e);
                            }}
                        >
                            Female
                        </Button>
                    </ButtonGroup>

                    <legend>Ethnicity</legend>
                    <Input
                        type="select"
                        name="ethnicity"
                        id="exampleSelect"
                        onChange={handleChange}
                        value={details.ethnicity}
                    >
                        {ethnicities.sort().map((option, i) => (
                            <option key={`ethnicity-option-${i}`}>{option}</option>
                        ))}
                    </Input>

                    <legend>Age</legend>
                    <Input
                        type="textbox"
                        name="userAge"
                        id="exampleText"
                        onChange={handleChange}
                        value={details.userAge}
                    />
                </FormGroup>
            </Col>
        </Container>
    );
};

export default StepOne;
