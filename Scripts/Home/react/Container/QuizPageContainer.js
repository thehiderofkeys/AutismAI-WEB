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
    const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
    const [isToddler, setIsToddler] = useState(false);
    const [isInAgeLimit, setIsInAgeLimit] = useState(true);
    const [isRestartModalOpen, setIsRestartModalOpen] = useState(false);

    useEffect(() => {
        function getCachedQuestionAnswers() {
            let cachedData = sessionStorage.getItem("questionAnswers");

            if (cachedData) {
                setIsRestartModalOpen(true);
            } else {
                setIsAgeModalOpen(true);
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

    const continueQuiz = () => {
        let cachedData = JSON.parse(sessionStorage.getItem("questionAnswers"));
        let cachedQuestion = JSON.parse(sessionStorage.getItem("currentQuestion"));
        let cachedIsToddler = JSON.parse(sessionStorage.getItem("isToddler"));

        let questionAnswers = cachedData;
        console.log(questionAnswers);
        setQuestionAnswers(questionAnswers);
        if (questionAnswers.details.userAge && cachedIsToddler) {
            setIsAgeModalOpen(false);
        }
        setQuestions(
            getQuestionsRequest(parseInt(questionAnswers.details.userAge), cachedIsToddler)
        );
        setIsToddler(cachedIsToddler);

        if (cachedQuestion) {
            setCurrentQuestion(cachedQuestion);
        }

        setIsRestartModalOpen(false);
    };

    const restartQuiz = (confirmation) => {
        if (confirmation) {
            continueQuiz();
        } else {

            setIsRestartModalOpen(false);
            setIsAgeModalOpen(true);

            sessionStorage.removeItem("questionAnswers");
            sessionStorage.removeItem("currentQuestion");
            sessionStorage.removeItem("isToddler");
        }
    };

    const toggleRespondentAgeModal = () => setIsAgeModalOpen(!isAgeModalOpen);
    const toggleRestartModal = () => setisRestartModalOpen(!isRestartModalOpen);

    const handleAgeRespondentClick = (confirmation) => {
        if (confirmation) {
            setQuestionAnswers((prevAnswers) => {
                const newAnswers = { ...prevAnswers };
                newAnswers.details.monthsOrYears = "Months";
                sessionStorage.setItem("questionAnswers", newAnswers);
                return newAnswers;
            });
            setIsToddler(true);
            sessionStorage.setItem("isToddler", JSON.stringify(true));
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
            sessionStorage.setItem("questionAnswers", JSON.stringify(newAnswers));
            return newAnswers;
        });
    };

    const handleNextQuestion = async () => {
        if (currentQuestion == 0) {
            sessionStorage.setItem("currentQuestion", JSON.stringify(currentQuestion + 1));
            setCurrentQuestion(currentQuestion + 1);
            getQuestions();
        } else if (currentQuestion < questions.length + 1) {
            sessionStorage.setItem("currentQuestion", JSON.stringify(currentQuestion + 1));
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("end");
            sessionStorage.removeItem("questionAnswers");
            sessionStorage.removeItem("currentQuestion");
            sessionStorage.removeItem("isToddler");

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
            const newAnswers = { ...prevAnswers };
            newAnswers.details[name] = value;
            sessionStorage.setItem("questionAnswers", JSON.stringify(newAnswers));
            return newAnswers;
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
        setQuestionAnswers((prevAnswers) => {
            const newAnswers = { ...prevAnswers };
            newAnswers.details[name] = value;
            sessionStorage.setItem("questionAnswers", JSON.stringify(newAnswers));
            return newAnswers;
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
        isInAgeLimit,
        toggleRestartModal,
        restartQuiz,
        isRestartModalOpen
    };

    return React.cloneElement(children, { ...newProps });
};

export default QuizPageContainer;
