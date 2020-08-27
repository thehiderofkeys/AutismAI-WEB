import React, { useState } from "react";

const ContributionPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

    const [details, setDetails] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })


    const handleChange = (event) => {
        const newDetails = JSON.parse(JSON.stringify(details));
        const { name, value } = event.target;

        newDetails[name] = value;

        setDetails(newDetails);
    }

    const onBlur = (event) => {
        console.log(details);
    }

    const newProps = { details, handleChange, onBlur };

    return React.cloneElement(children, { ...newProps });
};

export default ContributionPageContainer;
