import React, { useState, useEffect } from "react";
import { categories, getQuestions } from "../services/questionsService";

const QuizPageContainer = ({ children }) => {
    // Any variables or methods declared in newProps will be passed through to children
    // components as declared in frontpage.jsx

    const [questionAnswers, setQuestionAnswers] = useState({
        details: { userAge: "", ethnicity: "", gender: "", testTaker: "" },
        answers: {}
    });
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState({});

    useEffect(() => {
        setQuestions(getQuestions(categories.ADOLESCENT));
    }, [])

    const handleQuestionAnswer = ({ question, answer }) => {
        setQuestionAnswers((prevQuestions) => {
            const newQuestions = { ...prevQuestions };
            newQuestions.answers[question] = answer;
            return newQuestions;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length + 2) {
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

    //const questions = [
    //    {
    //        name: "Question 1",
    //        questionText: "This is question 1"
    //    },
    //    {
    //        name: "Question 2",
    //        questionText: "This is question 2"
    //    }
    //];

    const ethnicities = [
        "",
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

    const testTakerOptions = [
        "",
        "Health",
        "Care",
        "Professional",
        "Parent",
        "Family",
        "Member",
        "Self",
        "Others"
    ];

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
        testTakerOptions
    };

    return React.cloneElement(children, { ...newProps });
};

export default QuizPageContainer;
