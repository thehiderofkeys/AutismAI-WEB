import React from "react";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const LastQuestion = ({
    questionAnswers,
    handleNextPage,
    handleQuestionAnswer,
    diagnosticQuestion,
    isASDMethodOpen,
    toggleASDMethodModal,
    handleASDMethodClick,
    lastQuestion
}) => {

    const disableNext = !questionAnswers.answers.lastQuestion;
    return (
        <>
            <div className={styles["container"]}>
                <p>
                    One last question, please help us to make Autism AI smarter by answering the
                    following question carefully
                </p>

                <Question
                    question={lastQuestion}
                    handleChange={handleQuestionAnswer}
                    questionAnswers={questionAnswers.answers}
                />

                <Button
                    onClick={handleNextPage}
                    className="text-light btn-block"
                    style={{
                        backgroundColor: "#242e4c",
                        border: "1px solid #ced4da",
                        borderRadius: "15px",
                        marginTop: "10px",
                        padding: "12px",
                        width: "361px",
                    }}
                    disabled={disableNext}
                >
                    View Results
                </Button>
            </div>

            <div>
                <Modal isOpen={isASDMethodOpen} toggle={toggleASDMethodModal}>
                    {/*<ModalHeader>What was the</ModalHeader>*/}
                    <ModalBody>
                        <Question
                            question={diagnosticQuestion}
                            handleChange={handleQuestionAnswer}
                            questionAnswers={questionAnswers.answers}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => {
                                handleASDMethodClick();
                            }}
                        >
                            Confirm
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
};

export default LastQuestion;
