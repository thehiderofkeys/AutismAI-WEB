import React, { useState } from "react";
import {
    Col,
    Container,
    FormGroup,
    Input,
    ButtonGroup,
    Button,
    Tooltip,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import { HelpCircle } from "react-feather";
import { isAllowedNumericInput } from "../../util/helpers";

const StepOne = ({
    handleChange,
    details,
    ethnicities,
    handleClick,
    toggleRespondentAgeModal,
    isAgeModalOpen,
    handleAgeRespondentClick,
    isToddler
}) => {
    const checkIsNumber = (event) => {
        const val = event.target.value;

        if (isAllowedNumericInput(val)) {
            handleChange(event);
        }
    };

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const [ageToolTip, setAgeToolTip] = useState(false);
    const toggleAgeToolTip = () => setAgeToolTip(!ageToolTip);

    return (
        <>
            <div>
                <Modal isOpen={isAgeModalOpen} toggle={toggleRespondentAgeModal}>
                    <ModalHeader>Respondent Age</ModalHeader>
                    <ModalBody>
                        <p>Are you taking the test for a toddler less than 36 months old?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => {
                                handleAgeRespondentClick(true);
                            }}
                        >
                            Yes
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => {
                                handleAgeRespondentClick(false);
                            }}
                        >
                            No
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
            <Container className="d-flex justify-content-center">
                <Col
                    style={{
                        maxWidth: "50%",
                        backgroundColor: "#ebf0ff",
                        borderRadius: "15px"
                    }}
                >
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
                            {ethnicities.map((option, i) => (
                                <option key={`ethnicity-option-${i}`}>{option}</option>
                            ))}
                        </Input>

                        <legend>
                            Age{" "}
                            <HelpCircle
                                style={{
                                    marginBottom: "3px"
                                }}
                                size={20}
                                id="ageHelp"
                            />
                            <Tooltip
                                placement="right"
                                isOpen={ageToolTip}
                                target="ageHelp"
                                toggle={toggleAgeToolTip}
                            >
                                {isToddler ? (
                                    <span>Toddler age can only be between 18 and 35 months.</span>
                                ) : (
                                    <span>
                                        Non-toddler selected. Valid ages are between 3 and 80 years
                                        old. years old.
                                    </span>
                                )}
                            </Tooltip>
                        </legend>
                        <Col
                            className="d-flex"
                            style={{
                                paddingLeft: "0px",
                                paddingRight: "0px"
                            }}
                        >
                            <Input
                                type="textbox"
                                name="userAge"
                                onChange={checkIsNumber}
                                value={details.userAge}
                            />
                            <Input
                                type="textbox"
                                name="monthsOrYears"
                                id="monthsOrYearsSelect"
                                value={isToddler ? "Months" : "Years"}
                                style={{
                                    maxWidth: "25%"
                                }}
                                disabled
                            />
                            {/*<Tooltip
                                placement="right"
                                isOpen={tooltipOpen}
                                target="monthsOrYearsSelect"
                                toggle={toggle}
                            >
                                Select months for todlers upto 36 months and years otherwise
                            </Tooltip>*/}
                        </Col>
                    </FormGroup>
                </Col>
            </Container>
        </>
    );
};

export default StepOne;
