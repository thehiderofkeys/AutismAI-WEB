import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";
import StepOne from "../../Components/StepOne/StepOne";
import StepTwo from "../../Components/StepTwo/StepTwo";
import BackAndNextBtn from "../../Components/BackAndNextBtn/BackAndNextBtn";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Quizpage = ({
    handleQuestionAnswer,
    questions,
    currentQuestion,
    handleNextQuestion,
    handlePrevQuestion,
    questionAnswers,
    ethnicities,
    handleChange,
    handleClick,
    testTakerOptions,
    getQuestions,
    toggleRespondentAgeModal,
    isAgeModalOpen,
    handleAgeRespondentClick,
    isToddler,
    toggleRestartModal,
    restartQuiz,
    isRestartModalOpen,
    isDisclaimerOpen,
    toggleDisclaimerModal,
    handleDisclaimerClick,
    isAgeRangeErrorModalOpen,
    toggleAgeRangeErrorModal
}) => {
    let isCurrentQuestionAnswered = true;

    const answerFields = [
        ["gender", "ethnicity", "userAge"],
        ["jaundice", "familyConnection", "testTaker"]
    ];

    if (currentQuestion > 1) {
        isCurrentQuestionAnswered = !!questionAnswers.answers[questions[currentQuestion - 2].name];
    } else {
        answerFields[currentQuestion].forEach((field) => {
            if (!questionAnswers.details[field]) {
                isCurrentQuestionAnswered = false;
            }
        });
    }

    return (
        <div className={styles["container"]}>
            {currentQuestion === 0 && (
                <StepOne
                    ethnicities={ethnicities}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    details={questionAnswers.details}
                    getQuestions={getQuestions}
                    toggleRespondentAgeModal={toggleRespondentAgeModal}
                    isAgeModalOpen={isAgeModalOpen}
                    handleAgeRespondentClick={handleAgeRespondentClick}
                    isToddler={isToddler}
                    toggleRestartModal={toggleRestartModal}
                    restartQuiz={restartQuiz}
                    isRestartModalOpen={isRestartModalOpen}
                    isAgeRangeErrorModalOpen={isAgeRangeErrorModalOpen}
                    toggleAgeRangeErrorModal={toggleAgeRangeErrorModal}
                />
            )}
            {currentQuestion === 1 && (
                <StepTwo
                    testTakerOptions={testTakerOptions}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    details={questionAnswers.details}
                    isToddler={isToddler}
                />
            )}
            {currentQuestion > 1 && (
                <Question
                    question={questions[currentQuestion - 2]}
                    handleChange={handleQuestionAnswer}
                    questionAnswers={questionAnswers.answers}
                />
            )}

            <BackAndNextBtn
                handleNextQuestion={handleNextQuestion}
                handlePrevQuestion={handlePrevQuestion}
                currentQuestion={currentQuestion}
                disableNext={!isCurrentQuestionAnswered}
            />

            <div>
                <Modal isOpen={isDisclaimerOpen} toggle={toggleDisclaimerModal} backdrop={'static'} keyboard={false}>
                    <ModalHeader>Disclaimer</ModalHeader>
                    <ModalBody>
                        <p>
                            This app is intended for research purposes. The result is not an
                            indication of Autism Spectrum Disorder (ASD) in the respondent. If you
                            are concened that you, a friend, or a relative, may have ASD, please
                            discuss your concerns with a health professional. By using this
                            application you acknowledge that your anonymised data may be included in
                            the research study.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => {
                                handleDisclaimerClick();
                            }}
                        >
                            Yes
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

Quizpage.defaultProps = {
    handleChange: () => {}
};

Quizpage.propTypes = {
    handleChange: PropTypes.func
};

export default Quizpage;
