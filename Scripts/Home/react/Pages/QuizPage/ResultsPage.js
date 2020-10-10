import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ResultsPage = ({}) => {
    return (
        <div className={styles["test"]}>
            <p> THis is the results page</p>
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
