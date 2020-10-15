import React, { useState } from "react";

const ContributionPageContainer = ({ children }) => {
    // Any variables or methods declared in newProps will be passed through to children
    // components as declared in frontpage.jsx

    const [details, setDetails] = useState({
        name: "",
        email: "",
        emailSubject: "",
        emailMessage: ""
    });

    const [isValidEmail, setIsValidEmail] = useState(false);

    const handleChange = (event) => {
        const newDetails = JSON.parse(JSON.stringify(details));
        const { name, value } = event.target;

        newDetails[name] = value;

        setDetails(newDetails);

        if (name === "email") {
            if (value.match(/^.*@.*\.((?![0-9]).)*$/i)) {
                setIsValidEmail(true);
            } else {
                setIsValidEmail(false);
            }
        }
    };

    const onBlur = (event) => {

    };

    const checkDetails = () => {
        let noErrors = true;
        Object.keys(details).forEach((key) => {
            if (!details[key].trim()) {
                noErrors = false;
            }
        });

        return noErrors && isValidEmail;
    };

    const onSubmit = (event) => {
        // Placeholder for submit button functionality
        if (checkDetails()) {
        } else {
        }
    };

    const contributorsList = [
        {
            name: "Tyger",
            contribution: "Developer"
        },
        {
            name: "Ryan",
            contribution: "Developer"
        }
    ];

    const newProps = {
        details,
        handleChange,
        onBlur,
        onSubmit,
        disableSubmit: !checkDetails(),
        contributorsList
    };

    return React.cloneElement(children, { ...newProps });
};

export default ContributionPageContainer;
