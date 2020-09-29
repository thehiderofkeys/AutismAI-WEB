import React from "react";
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
import { QuizContainer } from "../Question/QuestionStyle";

const StepTwo = ({ handleChange, details, testTakerOptions, handleClick, isToddler }) => {
    const parsedAge = parseInt(details.userAge);
    let filteredOptions = testTakerOptions;

    if (isToddler || (!isToddler && parsedAge < 12)) {
        filteredOptions = testTakerOptions.filter((option) => option !== "Self");
    }
    return (
        <Container className="d-flex justify-content-center">
            <QuizContainer>
                <FormGroup tag="fieldset">
                    <legend>Were you born with jaundice?</legend>
                    <ButtonGroup className="mb-3">
                        <Button
                            className="bg-white text-dark"
                            style={{ border: "1px solid #ced4da" }}
                            value={false}
                            onClick={(e) => {
                                handleClick("jaundice", e);
                            }}
                        >
                            No
                        </Button>
                        <Button
                            className=" bg-white text-dark"
                            style={{ border: "1px solid #ced4da" }}
                            value={true}
                            onClick={(e) => {
                                handleClick("jaundice", e);
                            }}
                        >
                            Yes
                        </Button>
                    </ButtonGroup>

                    <legend>Has anyone in your immediate family been diagnosed with autism?</legend>
                    <ButtonGroup className="mb-3">
                        <Button
                            className="bg-white text-dark"
                            style={{ border: "1px solid #ced4da" }}
                            value={false}
                            onClick={(e) => {
                                handleClick("familyConnection", e);
                            }}
                        >
                            No
                        </Button>
                        <Button
                            className=" bg-white text-dark"
                            style={{ border: "1px solid #ced4da" }}
                            value={true}
                            onClick={(e) => {
                                handleClick("familyConnection", e);
                            }}
                        >
                            Yes
                        </Button>
                    </ButtonGroup>

                    <legend>Who is completing this test?</legend>
                    <Input
                        type="select"
                        name="testTaker"
                        id="exampleSelect"
                        onChange={handleChange}
                        value={details.testTaker}
                    >
                        {filteredOptions.map((option, i) => (
                            <option key={`testTaker-${i}`}>{option}</option>
                        ))}
                    </Input>
                </FormGroup>
            </QuizContainer>
        </Container>
    );
};

export default StepTwo;
