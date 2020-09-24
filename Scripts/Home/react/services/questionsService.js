import questions from "../../../../Questions/questions.json";

export const categories = {
    ADULT: "questions_adult",
    ADOLESCENT: "questions_adolescent",
    CHILD: "questions_child",
    CHAT: "questions_chat"
};
export const getQuestions = (category) => {
    const retrievedQuestions = questions[category];
    const mappedQuestions = retrievedQuestions.map((question, i) => {
        return {
            name: `Question ${i+ 1}`,
            questionText: question
        };
    });

    return mappedQuestions;
};
