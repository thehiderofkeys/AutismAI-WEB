import React from "react";
import QuizPageContainer from "../../Container/QuizPageContainer";

import QuizPage from "./QuizPage";
import LastQuestion from "./LastQuestion";
import ResultsPage from "./ResultsPage";


export default () => {
  return (
      <QuizPageContainer>
          <QuizPage />
          <LastQuestion />
          <ResultsPage />
      </QuizPageContainer>
  );
};
