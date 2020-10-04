import React, { useState, useEffect } from "react";
import {
    getQuestions as getQuestionsRequest,
    getTestTakerOptions,
    getEthnicity,
    postQuizResults
} from "../services/QuestionsService";

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
    const [isToddler, setIsToddler] = useState(false);
    const [isInAgeLimit, setIsInAgeLimit] = useState(true);

    useEffect(() => {
        async function getCachedQuestionAnswers() {
            let cachedData = localStorage.getItem('questionAnswers');
            if (cachedData) {
                let questionAnswers = await JSON.parse(cachedData);
                console.log(questionAnswers);
                setQuestionAnswers(questionAnswers);
            }
        }

        const ethnicityResponse = getEthnicity();
        ethnicityResponse.push("Others");
        setEthnicities(ethnicityResponse);

        const testTakerResponse = getTestTakerOptions();
        testTakerResponse.push("Others");
        setTestTakerOptions(testTakerResponse);

        getCachedQuestionAnswers();
    }, []);

    const toggleRespondentAgeModal = () => setIsAgeModalOpen(!isAgeModalOpen);

    const handleAgeRespondentClick = (confirmation) => {
        if (confirmation) {
            setQuestionAnswers((prevAnswers) => {
                const newAnswers = { ...prevAnswers };
                newAnswers.details.monthsOrYears = "Months";
                return newAnswers;
            });
            setIsToddler(true);
        }
        setIsAgeModalOpen(false);
    };

    const getQuestions = () => {
        const { details } = questionAnswers;
        if (questionAnswers.details.userAge) {
            setQuestions(getQuestionsRequest(parseInt(details.userAge), isToddler));
        }
    };

    const handleQuestionAnswer = ({ question, answer }) => {
        setQuestionAnswers((prevAnswers) => {
            const newAnswers = { ...prevAnswers };
            newAnswers.answers[question] = answer;
            return newAnswers;
        });
    };

    const handleNextQuestion = async () => {
        if (currentQuestion == 0) {
            setCurrentQuestion(currentQuestion + 1);
            getQuestions();
        } else if (currentQuestion < questions.length + 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("end");
            const results = await postQuizResults(questionAnswers);
            console.log(results);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setQuestionAnswers((prevAnswers) => {
            const newQuestions = { ...prevAnswers };
            newQuestions.details[name] = value;
            localStorage.setItem('questionAnswers', JSON.stringify(newQuestions));
            return newQuestions;
        });

        if (name === "userAge") {
            const parsedAge = parseInt(value);

            if (isToddler) {
                if (parsedAge < 18 || parsedAge > 35) {
                    setIsInAgeLimit(false);
                } else {
                    setIsInAgeLimit(true);
                }
            } else {
                if (parsedAge < 3 || parsedAge > 80) {
                    setIsInAgeLimit(false);
                } else {
                    setIsInAgeLimit(true);
                }
            }
        }
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
        handleAgeRespondentClick,
        isToddler,
        isInAgeLimit
    };

    return React.cloneElement(children, { ...newProps });
};

export default QuizPageContainer;
