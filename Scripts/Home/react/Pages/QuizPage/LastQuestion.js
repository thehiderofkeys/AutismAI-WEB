import React from "react";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";

const LastQuestion = ({ questionAnswers, handleNextPage }) => {
    const lastQuestion = {
        name: `lastQuestion`,
        questionText:
            "Has the respondent been formally assessed or dignosed for ASD by licenced health professionals?",
        answerSet: [
            "No, the respondant has never been formally assessed",
            "Yes, the respondant has been asseseed but ASD was not diagnosed",
            "Yes, the respondant has been assessed and ASD was diagnosed"
        ]
    };

    const disableNext = !questionAnswers.answers.lastQuestion;
    return (
        <div className={styles["test"]}>
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
                    marginTop: "0px",
                    padding: "12px"
                }}
                disabled={disableNext}
            >
                View Results
            </Button>
        </div>
    );
};

export default LastQuestion;
