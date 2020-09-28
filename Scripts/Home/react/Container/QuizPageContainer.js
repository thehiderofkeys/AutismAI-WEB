import React, { useState, useEffect } from "react";
import {
    getQuestions as getQuestionsRequest,
    getTestTakerOptions,
    getEthnicity
} from "../services/questionsService";

const QuizPageContainer = ({ children }) => {
    const [questionAnswers, setQuestionAnswers] = useState({
        details: { userAge: "", ethnicity: "", gender: "", testTaker: "", monthsOrYears: "Years" },
        answers: {}
    });
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState({});
    const [ethnicities, setEthnicities] = useState([]);
    const [testTakerOptions, setTestTakerOptions] = useState([]);
    const [isAgeModalOpen, setIsAgeModalOpen] = useState(true);

    useEffect(() => {
        const ethnicityResponse = getEthnicity();
        ethnicityResponse.push("Others");
        setEthnicities(ethnicityResponse);

        const testTakerResponse = getTestTakerOptions();
        testTakerResponse.push("Others");
        setTestTakerOptions(testTakerResponse);
    }, []);

    const toggleRespondentAgeModal = () => setIsAgeModalOpen(!isAgeModalOpen);

    const handleAgeRespondentClick = (confirmation) => {
        if (confirmation) {
            setQuestionAnswers((prevAnswers) => {
                const newAnswers = { ...prevAnswers };
                newAnswers.details.monthsOrYears = "Months";
                return newAnswers;
            });
        }
        setIsAgeModalOpen(false);
    };

    const getQuestions = () => {
        const { details } = questionAnswers;
        if (questionAnswers.details.userAge) {
            setQuestions(
                getQuestionsRequest({ age: parseInt(details.userAge), unit: details.monthsOrYears })
            );
        }
    };

    const handleQuestionAnswer = ({ question, answer }) => {
        setQuestionAnswers((prevAnswers) => {
            const newAnswers = { ...prevAnswers };
            newAnswers.answers[question] = answer;
            return newAnswers;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestion == 0) {
            setCurrentQuestion(currentQuestion + 1);
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

    const newProps = {
        questions,
        handleQuestionAnswer,
        handleNextQuestion,
        handlePrevQuestion,
        currentQuestion,
        questionAnswers,
        ethnicities,
        handleChange,
        handleClick,
        testTakerOptions,
        getQuestions,
        toggleRespondentAgeModal,
        isAgeModalOpen,
        handleAgeRespondentClick
    };

    return React.cloneElement(children, { ...newProps });
};

export default QuizPageContainer;
