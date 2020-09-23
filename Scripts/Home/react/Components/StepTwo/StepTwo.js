import React from "react";
import { Row, Col, Container, FormGroup, Label, legend, Input, ButtonGroup, Button } from "reactstrap";

const StepTwo = ({ handleChange, stepTwoAnswers, testTakerOptions }) => {

    const onClick = (event) => {
        handleChange({});
    };
    return (
        <Container className="d-flex justify-content-center">
            <Col style={{ maxWidth: '50%' }}>
                <FormGroup tag="fieldset">
                    <legend>Were you born with jaundice?</legend>
                    <ButtonGroup >
                        <Button className="bg-white text-dark" style={{ border: '1px solid #ced4da' }}>No</Button>
                        <Button className=" bg-white text-dark" style={{ border: '1px solid #ced4da' }}>Yes</Button>
                    </ButtonGroup>

                    <legend>Has anyone in your immediate family been diagnosed with autism?</legend>
                    <ButtonGroup >
                        <Button className="bg-white text-dark" style={{ border: '1px solid #ced4da' }}>No</Button>
                        <Button className=" bg-white text-dark" style={{ border: '1px solid #ced4da' }}>Yes</Button>
                    </ButtonGroup>

                    <legend>Who is completing this test?</legend>
                    <Input type="select" name="testTaker" id="exampleSelect" >
                        {testTakerOptions.map((option) => (
                            <option>{option}</option>
                        ))}
                    </Input>
                </FormGroup>
            </Col>
        </Container>
    );
};

export default StepTwo;
