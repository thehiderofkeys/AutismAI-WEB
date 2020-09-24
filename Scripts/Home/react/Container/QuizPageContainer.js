import React, { useState, useEffect } from "react";
import {
    getQuestions as getQuestionsRequest,
    getTestTakerOptions,
    getEthnicity
} from "../services/questionsService";

const QuizPageContainer = ({ children }) => {

    const [questionAnswers, setQuestionAnswers] = useState({
        details: { userAge: "", ethnicity: "", gender: "", testTaker: "" },
        answers: {}
    });
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState({});
    const [ethnicities, setEthnicities] = useState([]);
    const [testTakerOptions, setTestTakerOptions] = useState([]);

    useEffect(() => {
        setEthnicities(getEthnicity);
        setTestTakerOptions(getTestTakerOptions);
    }, []);

    const getQuestions = () => {
        if (questionAnswers.details.userAge) {
            setQuestions(getQuestionsRequest(parseInt(questionAnswers.details.userAge)));
}
    };

    const handleQuestionAnswer = ({ question, answer }) => {
        setQuestionAnswers((prevQuestions) => {
            const newQuestions = { ...prevQuestions };
            newQuestions.answers[question] = answer;
            return newQuestions;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestion == 0) {
            getQuestions();
        }
        if (currentQuestion < questions.length + 2) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setQuestionAnswers((prevQuestions) => {
            const newQuestions = { ...prevQuestions };
            newQuestions.details[name] = value;
            return newQuestions;
        });
    };

    const handleClick = (name, event) => {
        const { value } = event.target;
        setQuestionAnswers((prevQuestions) => {
            const newQuestions = { ...prevQuestions };
            newQuestions.details[name] = value;
            return newQuestions;
        });
    };

    const answerOptions = ["Very Easy", "Quite Easy", "Very Difficult", "Impossible"];

    const newProps = {
        questions,
        answerOptions,
        handleQuestionAnswer,
        handleNextQuestion,
        handlePrevQuestion,
        currentQuestion,
        questionAnswers,
        ethnicities,
        handleChange,
        handleClick,
        testTakerOptions,
        getQuestions
    };

    return React.cloneElement(children, { ...newProps });
};

export default QuizPageContainer;
