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
import { QuizContainer } from "../Question/QuestionStyle";

const StepOne = ({
    handleChange,
    details,
    ethnicities,
    handleClick,
    toggleRespondentAgeModal,
    isAgeModalOpen,
    handleAgeRespondentClick,
    isToddler,
    toggleRestartModal,
    restartQuiz,
    isRestartModalOpen,
    isAgeRangeErrorModalOpen,
    toggleAgeRangeErrorModal
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
                <Modal isOpen={isAgeModalOpen} toggle={toggleRespondentAgeModal} backdrop={'static'} keyboard={false}>
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

            <div>
                <Modal isOpen={isRestartModalOpen} toggle={toggleRestartModal}>
                    <ModalHeader>Continue Quiz</ModalHeader>
                    <ModalBody>
                        <p>
                            Do you want to continue the quiz from where you left off? Or restart
                            again?
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => {
                                restartQuiz(false);
                            }}
                        >
                            Restart
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => {
                                restartQuiz(true);
                            }}
                        >
                            Continue
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>

            <div>
                <Modal isOpen={isAgeRangeErrorModalOpen} toggle={toggleAgeRangeErrorModal} backdrop={'static'} keyboard={false}>
                    <ModalHeader>Age Range Error!</ModalHeader>
                    <ModalBody>
                        <p>
                            Ages in months must be between 18 and 35 months.
                            Ages in years must be between 3 and 80 years.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                        
                            onClick={() => {
                                toggleAgeRangeErrorModal();
                            }}
                        >
                            
                            Ok
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>

            <Container className="d-flex justify-content-center">
                <QuizContainer>
                    <FormGroup tag="fieldset">
                        <legend>Gender</legend>
                        <ButtonGroup className="mb-3">
                            <Button
                                className="btn btn-light"
                                style={{ border: "1px solid #ced4da" }}
                                value={"Male"}
                                active={details.gender === "Male"}
                                onClick={(e) => {
                                    handleClick("gender", e);
                                }}
                            >
                                Male
                            </Button>

                            <Button
                                className="btn btn-light"
                                style={{ border: "1px solid #ced4da" }}
                                value={"Female"}
                                active={details.gender === "Female"}
                                onClick={(e) => {
                                    handleClick("gender", e);
                                }}
                            >
                                Female
                            </Button>
                        </ButtonGroup>

                        <legend>Ethnicity</legend>
                        <Input
                            className="mb-3"
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
                                        old.
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
                </QuizContainer>
            </Container>
        </>
    );
};

export default StepOne;
