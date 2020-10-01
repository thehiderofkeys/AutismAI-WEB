﻿import questions from "../../../../Questions/questions.json";
import { predictionRoute } from './ApiRoutes';

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
export const getQuestions = ( age , isToddler) => {
    let category = categories.ADULT;

    switch (true) {
        case isToddler:
            category = categories.CHAT;
        case age <= 11:
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
    return mappedQuestions;
};

export const getEthnicity = () => {
    const ethnicities = questions.spinner_ethnicity_items.sort();
    return ethnicities;
};

export const getTestTakerOptions = () => {
    let testTakerOptions = questions.spinner_user_items.sort();
    return testTakerOptions;
};


export const postQuizResults = async (userData) => {

    const postiveAnswer = [
        "Definitely Agree",
        "Slightly Agree",
        "Always",
        "Usually","Very Easy",
        "Quite Easy",
        "Many times a day",
        "A few times a day",
        "Very typical",
        "Quite typical"
        ];
    const negativeAnswer = [
        "Slightly Disagree",
        "Definitely Disagree",
        "Rarely","Never","Very Difficult",
        "Impossible", "Less than once a week","Never","Very unusuall",
        "My child does not speak"
        ];

    let reqBody = {}

    Object.key(userData.answers).foreach((key) => {
        reqBody.key = postiveAnswer.includes(userData.answers[key]) ? "1" : "0"; 
    });

    console.log(reqBody);
};
