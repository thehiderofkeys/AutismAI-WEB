import React from "react";

const QuizPageContainer = ({ children }) => {
    // Any variables or methods declared in newProps will be passed through to children
    // components as declared in frontpage.jsx

    const handleChange = () => {
        console.log("handleChange");
    };

    const question = {
        name: "Question 1",
        questionText: "This is question 1 haha ur gay"
    }

    const answerOptions = [
        "Very Easy",
        "Quite Easy",
        "Very Difficult",
        "Impossible"
    ];

    const newProps = { handleChange, question, answerOptions };

    return React.cloneElement(children, { ...newProps });
};

export default QuizPageContainer;
