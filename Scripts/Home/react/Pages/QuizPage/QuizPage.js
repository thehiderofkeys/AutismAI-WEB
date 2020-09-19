import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";

const Quizpage = ({
    handleQuestionAnswer,
    questions,
    answerOptions,
    currentQuestion,
    handleNextQuestion,
    handlePrevQuestion,
    questionAnswers
}) => {
    console.log(currentQuestion);
    return (
        <div className={styles["test"]}>
            <Question
                question={questions[currentQuestion]}
                answerOptions={answerOptions}
                handleChange={handleQuestionAnswer}
                questionAnswers={questionAnswers}
                currentQuestion={currentQuestion}
            />
            <button onClick={handlePrevQuestion} disabled={currentQuestion <= 0}>
                {" "}
                Back{" "}
            </button>

            <button onClick={handleNextQuestion}> Next </button>
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
