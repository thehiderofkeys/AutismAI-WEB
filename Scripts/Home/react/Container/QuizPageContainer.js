import React, { useState } from "react";

const QuizPageContainer = ({ children }) => {
    // Any variables or methods declared in newProps will be passed through to children
    // components as declared in frontpage.jsx

    const [questionAnswers, setQuestionAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleQuestionAnswer = ({ question, answer }) => {
        setQuestionAnswers((prevQuestions) => {
            const newQuestions = { ...prevQuestions };
            newQuestions[question] = answer;
            return newQuestions;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestion < 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
        console.log(questionAnswers);
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
        console.log(questionAnswers);
    };

    const questions = [
        {
            name: "Question 1",
            questionText: "This is question 1 haha ur gay"
        },
        {
            name: "Question 2",
            questionText: "This is question 2 haha im gay"
        }
    ];

    const ethnicities = [
        "South Asian",
        "Maori",
        "Pacifica",
        "Asian",
        "White European",
        "Black",
        "Aboriginal",
        "Latino",
        "Middle Eastern",
        "Native Indian",
        "Mixed",
        "Hispanic",
        "Others"
    ];

    const answerOptions = ["Very Easy", "Quite Easy", "Very Difficult", "Impossible"];

    const newProps = {
        questions,
        answerOptions,
        handleQuestionAnswer,
        handleNextQuestion,
        handlePrevQuestion,
        currentQuestion,
        questionAnswers,
        ethnicities
    };

    return React.cloneElement(children, { ...newProps });
};

export default QuizPageContainer;
