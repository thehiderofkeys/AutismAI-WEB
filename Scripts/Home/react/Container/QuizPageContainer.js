import React, { useState, useEffect } from "react";
import {
    getQuestions as getQuestionsRequest,
    getTestTakerOptions,
    getEthnicity,
    postQuizResults,
    getDiagnosticQuestion,
    getLastQuestion,
    postDiagnosticResult
} from "../services/QuestionsService";
import Loading from "../Components/Loading/Loading";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
    const [isASDMethodOpen, setIsASDMethodOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentComponent, setCurrentComponent] = useState(0);
    const [isAgeRangeErrorModalOpen, setIsAgeRangeErrorModalOpen] = useState(false);

    const [quizResults, setQuizResults] = useState({});

    const diagnosticQuestion = getDiagnosticQuestion();
    const lastQuestion = getLastQuestion();

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

    const toggleRespondentAgeModal = () => setIsAgeModalOpen(!isAgeModalOpen);
    const toggleRestartModal = () => setisRestartModalOpen(!isRestartModalOpen);
    const toggleDisclaimerModal = () => setIsDisclaimerOpen(!isDisclaimerOpen);
    const toggleASDMethodModal = () => setIsASDMethodOpen(!isASDMethodOpen);
    const toggleAgeRangeErrorModal = () => setIsAgeRangeErrorModalOpen(!isAgeRangeErrorModalOpen);

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

    const handleDisclaimerClick = () => {
        handleNextPage();
    };

    const handleASDMethodClick = () => {
        if (questionAnswers.answers.diagnosticMethod) {
            setIsASDMethodOpen(false);
        }
    };

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
        if (question === "diagnosticConfirmation") {
            setQuestionAnswers((prevAnswers) => {
                const newAnswers = { ...prevAnswers };
                delete newAnswers.answers.diagnosticMethod;
                return newAnswers;
            });

            if (answer.includes("Yes")) {
                setIsASDMethodOpen(true);
            }
        }
        setQuestionAnswers((prevAnswers) => {
            const newAnswers = { ...prevAnswers };
            newAnswers.answers[question] = answer;
            if (question !== "diagnosticConfirmation" && question !== "diagnosticMethod") {
                sessionStorage.setItem("questionAnswers", JSON.stringify(newAnswers));
            }
            return newAnswers;
        });
    };

    const handleNextQuestion = async () => {
        if (currentQuestion == 0) {
            if (isInAgeLimit) {
                sessionStorage.setItem("currentQuestion", JSON.stringify(currentQuestion + 1));
                setCurrentQuestion(currentQuestion + 1);
                getQuestions();
            }
            else {
                setIsAgeRangeErrorModalOpen(!isInAgeLimit);
            }
            
        } else if (currentQuestion < questions.length + 1) {
            sessionStorage.setItem("currentQuestion", JSON.stringify(currentQuestion + 1));
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsLoading(true);
            sessionStorage.removeItem("questionAnswers");
            sessionStorage.removeItem("currentQuestion");
            sessionStorage.removeItem("isToddler");

            const results = await postQuizResults(questionAnswers);
            setQuizResults(results);
            setIsDisclaimerOpen(true);
            setIsLoading(false);
        }
    };

    const handleNextPage = async () => {
        setCurrentComponent(currentComponent + 1);
        if (currentComponent === 1) {
            setIsLoading(true);
            const res = await postDiagnosticResult(questionAnswers, quizResults);
            setIsLoading(false);
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

    const handleRestart = () => {
        window.location.reload(false);
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

    const handleCreatePdf = () => {
        const input = document.getElementById("capture");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("result.pdf");
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
        handleCreatePdf,
        handleRestart,
        testTakerOptions,
        getQuestions,
        toggleRespondentAgeModal,
        isAgeModalOpen,
        handleAgeRespondentClick,
        isToddler,
        isInAgeLimit,
        toggleRestartModal,
        restartQuiz,
        isRestartModalOpen,
        isDisclaimerOpen,
        toggleDisclaimerModal,
        handleDisclaimerClick,
        quizResults,
        handleNextPage,
        diagnosticQuestion,
        lastQuestion,
        isASDMethodOpen,
        toggleASDMethodModal,
        handleASDMethodClick,
        isAgeRangeErrorModalOpen,
        toggleAgeRangeErrorModal
    };

    return (
        <>
            {isLoading && <Loading />}
            {React.cloneElement(children[currentComponent], { ...newProps })}
        </>
    );
};

export default QuizPageContainer;
