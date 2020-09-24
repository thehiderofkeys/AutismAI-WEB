import questions from "../../../../Questions/questions.json";

export const categories = {
    ADULT: "questions_adult",
    ADOLESCENT: "questions_adolescent",
    CHILD: "questions_child",
    CHAT: "questions_chat"
};
export const getQuestions = (age) => {
    let category = categories.ADULT;
    switch (true) {
        case age <= 11:
            console.log("child")
            category = categories.CHILD;
            break;
        case age <= 16:
            category = categories.ADOLESCENT;
            break;
        default:
            category = categories.ADULT;
            break;
    }

    const retrievedQuestions = questions[category];
    const mappedQuestions = retrievedQuestions.map((question, i) => {
        return {
            name: `Question ${i + 1}`,
            questionText: question
        };
    });
    console.log(mappedQuestions);

    return mappedQuestions;
};

export const getEthnicity = () => {
    const ethnicities = questions.spinner_ethnicity_items.sort();
    ethnicities.push("Others");
    return ethnicities;
}

export const getTestTakerOptions = () => {
    const testTakerOptions = questions.spinner_user_items.sort();
    testTakerOptions.push("Others");
    return testTakerOptions;
}
