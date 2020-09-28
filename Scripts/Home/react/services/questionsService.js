import questions from "../../../../Questions/questions.json";

export const categories = {
    ADULT: "questions_adult",
    ADOLESCENT: "questions_adolescent",
    CHILD: "questions_child",
    CHAT: "questions_chat"
};

const answerSetType = {
    AGREE: "agree_answer_options",
    FREQUENCY: "frequency_answer_options",
    EASE: "ease_answer_options",
    DAILY_FREQ: "daily_frequency_answer_options",
    FIRST_WORD: "first_word_answer_options"
};

export const getAnswerSet = (answerSet) => {
    return questions[answerSet];
};
export const getQuestions = ({ age, unit }) => {
    let category = categories.ADULT;
    let calculatedAge;
    let isToddler = false;

    if (unit === "Years") {
        calculatedAge = age;
    } else {
        calculatedAge = age / 12;
    }

    switch (true) {
        case calculatedAge < 3:
            category = categories.CHAT;
            isToddler = true;
        case calculatedAge <= 11:
            console.log("child");
            category = categories.CHILD;
            break;
        case calculatedAge <= 16:
            category = categories.ADOLESCENT;
            break;
        default:
            category = categories.ADULT;
            break;
    }

    const retrievedQuestions = questions[category];

    const mappedQuestions = retrievedQuestions.map((question, i) => {
        let answerSet = getAnswerSet(answerSetType.AGREE);
        if (isToddler) {
            switch (true) {
                case i === 0 || i === 6:
                    answerSet = getAnswerSet(answerSetType.FREQUENCY);
                    break;
                case i === 1:
                    answerSet = getAnswerSet(answerSetType.EASE);
                    break;
                case i === 7:
                    answerSet = getAnswerSet(answerSetType.FIRST_WORD);
                    break;
                default:
                    answerSet = getAnswerSet(answerSetType.DAILY_FREQ);
            }
        }
        return {
            name: `Question ${i + 1}`,
            questionText: question,
            answerSet
        };
    });
    console.log(mappedQuestions);
    return mappedQuestions;
};

export const getEthnicity = () => {
    const ethnicities = questions.spinner_ethnicity_items.sort();
    return ethnicities;
};

export const getTestTakerOptions = () => {
    let testTakerOptions = questions.spinner_user_items.sort();
    console.log(testTakerOptions);
    return testTakerOptions;
};
