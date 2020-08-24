import React from "react";

const QuizPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  const handleChange = () => {
    console.log("handleChange");
  };

  const newProps = { handleChange };

  return React.cloneElement(children, { ...newProps });
};

export default QuizPageContainer;
