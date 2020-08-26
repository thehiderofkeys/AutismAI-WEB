import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Quizpage = ({ handleChange }) => {

  console.log(handleChange);
    return (
        <div className={styles["test"]}>
      <p>This is the Quiz 2 Page.</p>
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
