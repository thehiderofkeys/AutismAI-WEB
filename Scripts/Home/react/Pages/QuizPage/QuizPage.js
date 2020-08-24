import React from "react";
import PropTypes from "prop-types";

const Quizpage = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <div className="AdminPage">
      <p>This is the Quiz Page.</p>
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
