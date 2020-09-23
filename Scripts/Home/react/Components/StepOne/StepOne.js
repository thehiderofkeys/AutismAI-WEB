import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input, ButtonGroup, Button } from "reactstrap";

const StepOne = ({handleChange, stepOneAnswers, ethnicities}) => {

    const onClick = (event) => {
        handleChange({});
    };
    console.log(ethnicities)
    return (
        <Container className="d-flex justify-content-center">
            <Col style={{ maxWidth:'50%' }}>
                    <FormGroup tag="fieldset">
                        <legend>Gender</legend>
                        <ButtonGroup >
                            <Button className="bg-white text-dark" style={{ border: '1px solid #ced4da' }}>Male</Button>
                            <Button className=" bg-white text-dark" style={{ border: '1px solid #ced4da' }}>Female</Button>
                        </ButtonGroup>

                        <legend>Ethnicity</legend>
                        <Input type="select" name="Ethnicity" id="exampleSelect" >
                            {ethnicities.map((option) => (
                                <option>{option}</option>
                            ))}
                        </Input>
                            <legend>Age</legend>
                            <Input type="textbox" name="text" id="exampleText"/>
                    </FormGroup>
            </Col>
        </Container>
    );
};

export default StepOne;
