import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";

const Quizpage = ({ handleChange, question, answerOptions }) => {
    return (
        <div className={styles["test"]}>
            <Question question={question} answerOptions={answerOptions} />
        </div>
    );
};

Quizpage.defaultProps = {
    handleChange: () => {}
};

Quizpage.propTypes = {
    handleChange: PropTypes.func
};

export default Quizpage;
