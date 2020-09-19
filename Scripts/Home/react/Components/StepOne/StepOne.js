import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input, ButtonGroup, Button } from "reactstrap";

const StepOne = ({handleChange, stepOneAnswers, ethnicities}) => {

    const onClick = (event) => {
        handleChange({});
    };
    console.log(ethnicities)
    return (
        <Container className="d-flex justify-content-center">
            <Col>
                <Row className="d-flex justify-content-center">
                    

                    <FormGroup tag="fieldset">
                        <legend>Gender</legend>
                        <ButtonGroup >
                            <Button className="bg-white text-dark" style={{ border: '1px solid #ced4da' }}>Male</Button>
                            <Button className=" bg-white text-dark" style={{ border: '1px solid #ced4da' }}>Female</Button>
                        </ButtonGroup>
                    </FormGroup>
                </Row>

                <Row className="d-flex justify-content-center">
                    <FormGroup tag="fieldset">
                        <legend>Ethnicity</legend>
                        <Input type="select" name="Ethnicity" id="exampleSelect" className="mw-75">
                            {ethnicities.map((option) => (
                                <option>{option}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Row>

                <Row className="d-flex justify-content-center">
                    <FormGroup>
                        <legend>Age</legend>
                        <Input type="textbox" name="text" id="exampleText" className="mw-75" />
                    </FormGroup>

                </Row>
            </Col>
            
        </Container>
    );
};

export default StepOne;
