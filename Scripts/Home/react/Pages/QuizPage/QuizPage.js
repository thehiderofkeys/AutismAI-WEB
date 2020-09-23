import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";
import StepOne from "../../Components/StepOne/StepOne";
import StepTwo from "../../Components/StepTwo/StepTwo";

const Quizpage = ({
    handleQuestionAnswer,
    questions,
    answerOptions,
    currentQuestion,
    handleNextQuestion,
    handlePrevQuestion,
    questionAnswers,
    ethnicities,
    handleChange,
    handleClick,
    testTakerOptions
}) => {
    //const requiredFields = [["age", "gender", "ethnicity"], ["jaundice", "testTaker", "familyConnection"]];

    return (
        <div className={styles["test"]}>
            {currentQuestion == 0 && (
                <StepOne
                    ethnicities={ethnicities}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    details={questionAnswers.details}
                />
            )}
            {currentQuestion == 1 && (
                <StepTwo
                    testTakerOptions={testTakerOptions}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    details={questionAnswers.details}
                />
            )}
            {currentQuestion > 1 && (
                <Question
                    question={questions[currentQuestion - 2]}
                    answerOptions={answerOptions}
                    handleChange={handleQuestionAnswer}
                    questionAnswers={questionAnswers.answers}
                    currentQuestion={currentQuestion}
                />
            )}

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
