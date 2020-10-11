﻿import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";
import { Button } from "reactstrap";

const ResultsPage = ({ quizResults, isToddler, handleRestart }) => {
    console.log(quizResults);

    let screeningTechnique;

    if (isToddler) {
        screeningTechnique = "Q-CHAT-10";
    } else {
        screeningTechnique = "AQ-10";
    }

    return (
        <div className={styles["container"]}>
            {quizResults.prediction === "True" && (
                <div>
                <p>
                        ASD traits have been detected by Autism AI screening tool based on the provided
                        answers. We recommend that you visit a health professional for further
                        evaluation.
                </p>

                <p>
                    Autism AI identified the respondent's behavioral indicators
                    similarity to other respodents on ASD spectrum in our database is{" "}{Math.round(quizResults.asd_probability * 100)}%.
                </p>
                <p>
                    For your reference, based on
                    conventional ASD screening {screeningTechnique} technique, autistic traits have
                    been identified in the respondent given the provided information. The{" "}
                    {screeningTechnique} score for the respondent is {quizResults.score}. This
                        result is not obtained from our AI. For more information about this conventional
                    method please refer to <a target="_blank" href="https://doi.org/10.1016/j.jaac.2011.11.003">https://doi.org/10.1016/j.jaac.2011.11.003</a>
                </p>
                </div>
            )}

            {quizResults.prediction === "False" && (
                <div>
                <p>
                        Autism AI has not identified any autistic traits based on the answers provided.
                </p>
                <p>
                    Autism AI identified the respondent's behavioral indicators similarity to other
                    respodents on ASD spectrum in our database is{" "}{Math.round(quizResults.asd_probability * 100)}%.
                </p>
                <p>
                    For your reference, based on conventional ASD screening {screeningTechnique} technique, autistic traits have
                    not been identified in the respondent given the provided information. The{" "}
                    {screeningTechnique} score for the respondent is {quizResults.score}. This
                        result is not obtained from our AI. For more information about this conventional
                    method please refer to <a target="_blank" href="https://doi.org/10.1016/j.jaac.2011.11.003">https://doi.org/10.1016/j.jaac.2011.11.003</a>
                </p>
                </div>
            )}

            <Button
                onClick={handleRestart}
                className="text-light btn-block"
                style={{
                    backgroundColor: "#242e4c",
                    border: "1px solid #ced4da",
                    borderRadius: "15px",
                    marginTop: "30px",
                    padding: "12px",
                    width: "361px"
                }}
         
            >
                Restart
            </Button>

            <Button
                className="text-light btn-block"
                style={{
                    backgroundColor: "#242e4c",
                    border: "1px solid #ced4da",
                    borderRadius: "15px",
                    marginTop: "0px",
                    padding: "12px",
                    width: "361px"
                }}
            >
                View Report
            </Button>
        </div>
    );
};

ResultsPage.defaultProps = {
    handleChange: () => {}
};

ResultsPage.propTypes = {
    handleChange: PropTypes.func
};

export default ResultsPage;
