import questions from "../../../../Questions/questions.json";
import { predictionRoute, diagnosticRoute } from "./ApiRoutes";

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
    FIRST_WORD: "first_word_answer_options",
    DIAGNOSTIC_METHOD: "diagnostic_technique"
};

export const getDiagnosticQuestion = () => {
    return {
        name: "diagnosticMethod",
        questionText: "What was the formal diagnostic technique used to assess the respondent?",
        answerSet: getAnswerSet(answerSetType.DIAGNOSTIC_METHOD)
    };
};

export const getLastQuestion = () => {
    return {
        name: `diagnosticConfirmation`,
        questionText:
            "Has the respondent been formally assessed or dignosed for ASD by licenced health professionals?",
        answerSet: [
            "No, the respondant has never been formally assessed",
            "Yes, the respondant has been assessed but ASD was not diagnosed",
            "Yes, the respondant has been assessed and ASD was diagnosed"
        ]
    };
};

export const getAnswerSet = (answerSet) => {
    return questions[answerSet];
};

export const getQuestions = (age, isToddler) => {
    let category = categories.ADULT;

    switch (true) {
        case isToddler:
            category = categories.CHAT;
            break;
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
            name: `question${i + 1}`,
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

const positiveAnswers = [
    "Definitely Agree",
    "Slightly Agree",
    "Always",
    "Usually",
    "Very Easy",
    "Quite Easy",
    "Many times a day",
    "A few times a day",
    "Very typical",
    "Quite typical"
];

const buildReqBody = (userData) => {
    const { details, answers } = userData;

    let reqBody = {};

    Object.keys(answers).forEach((key) => {
        reqBody[key] = positiveAnswers.includes(answers[key]) ? "1" : "0";
    });
    reqBody.age =
        details.monthsOrYears === "Years"
            ? details.userAge
            : Math.floor(parseInt(details.userAge) / 12).toString();
    reqBody.gender = details.gender === "Male" ? "m" : "f";
    reqBody.jaundice = details.jaundice ? "yes" : "no";
    reqBody.familyASD = details.familyASD ? "yes" : "no";

    return reqBody;
};

export const postQuizResults = async (userData) => {
    const reqBody = buildReqBody(userData);
    const res = await fetch(predictionRoute, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    }).then((response) => response.json());

    return JSON.parse(res);
};

const getClass = (score, category) => {
    if (category !== "Chat") {
        if (score > 6) {
            return "YES";
        }
    } else {
        if (score > 3) {
            return "YES";
        }
    }

    return "NO";
};

export const postDiagnosticResult = async (userData, quizResponse) => {
    const { details, answers } = userData;

    const reqBody = buildReqBody(userData);
    reqBody.quizId = quizResponse.next_id;
    reqBody.ethnicity = details.ethnicity;
    reqBody.ageCategory = quizResponse.autismCategory;
    reqBody.user = details.testTaker;
    reqBody.score = quizResponse.score;
    reqBody.classASD = getClass(quizResponse.score, quizResponse.autismCategory);
    reqBody.prediction = quizResponse.prediction === "False" ? "0" : "1";
    reqBody.formalDiag = answers.diagnosticConfirmation.includes("No") ? "0" : "1";
    reqBody.diagWithASD = answers.diagnosticConfirmation.includes("ASD was diagnosed") ? "1" : "0";
    reqBody.diagMethod = answers.diagnosticMethod;

    console.log(reqBody);

    const res = await fetch(diagnosticRoute, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    }).then((response) => response.json());
    return JSON.parse(res);
};
