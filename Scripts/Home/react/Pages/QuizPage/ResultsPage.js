import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Question from "../../Components/Question/Question";

const ResultsPage = ({ quizResults }) => {
    console.log(quizResults);
    return (
        <div className={styles["test"]}>
            <p>
                One last question, please help us to make Autism AI smarter by answeing the
                following question carefully
            </p>

            <Button
                onClick={handleNextPage}
                className="text-light btn-block"
                style={{
                    backgroundColor: "#242e4c",
                    border: "1px solid #ced4da",
                    borderRadius: "15px",
                    marginTop: "0px",
                    padding: "12px"
                }}
            >
                Next
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
