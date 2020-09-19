import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input, ButtonGroup, Button } from "reactstrap";

const StepOne = ({handleChange, stepOneAnswers, ethnicities}) => {

    const onClick = (event) => {
        handleChange({});
    };
    console.log(ethnicities)
    return (
        <Container>
            <Row className="align-items-center">
                    <legend>Gender</legend>
                    <FormGroup check>
                        <Row className="mt-3 border rounded mw-100 ">
                            <Label check className="ml-4">
                                <Input type="radio"
                                    onChange={onClick}/>
                                Male
                            </Label>
                        </Row>
                        <Row className="mt-3 border rounded mw-100 ">
                            <Label check className="ml-4">
                                <Input type="radio"
                                    onChange={onClick}/>
                                Female
                            </Label>
                        </Row>
                </FormGroup>
            </Row>

            <Row className="align-items-center">
                    <FormGroup tag="fieldset">
                        <legend>Ethnicity</legend>
                        <Input type="select" name="Ethnicity" id="exampleSelect">
                            {ethnicities.map((option) => (
                                <option>{option}</option>  
                             ))}
                        </Input>
                </FormGroup>
            </Row>

            <Row className="align-items-center">
                    <FormGroup>
                        <Label for="exampleText">Age</Label>
                        <Input type="textbox" name="text" id="exampleText" />
                    </FormGroup>
               
            </Row>
        </Container>
    );
};

export default StepOne;
