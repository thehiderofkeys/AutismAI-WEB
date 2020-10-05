import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";
import StepOne from "../../Components/StepOne/StepOne";
import StepTwo from "../../Components/StepTwo/StepTwo";
import BackAndNextBtn from "../../Components/BackAndNextBtn/BackAndNextBtn";

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
    isInAgeLimit,
    toggleRestartModal,
    restartQuiz,
    isRestartModalOpen
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
        <div className={styles["test"]}>
            {currentQuestion == 0 && (
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
                />
            )}
            {currentQuestion == 1 && (
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
                    currentQuestion={currentQuestion}
                />
            )}

            <BackAndNextBtn
                handleNextQuestion={handleNextQuestion}
                handlePrevQuestion={handlePrevQuestion}
                currentQuestion={currentQuestion}
                disableNext={!isCurrentQuestionAnswered || !isInAgeLimit}
            />
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
