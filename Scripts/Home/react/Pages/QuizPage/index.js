import React from "react";
import QuizPageContainer from "../../Container/QuizPageContainer";

import QuizPage from "./QuizPage";
import ResultsPage from "./ResultsPage"

export default () => {
  return (
      <QuizPageContainer>
          <ResultsPage />
          <QuizPage />
          <ResultsPage />
      </QuizPageContainer>
  );
};
