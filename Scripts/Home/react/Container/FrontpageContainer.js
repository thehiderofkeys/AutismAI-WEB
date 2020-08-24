import React from 'react';

const FrontpageContainer = ({ children }) => {
    const onClick = () => {
        console.log("onClick");
    };

    const newProps = { onClick };

    return React.cloneElement(children, { ...newProps });
};

export default FrontpageContainer;