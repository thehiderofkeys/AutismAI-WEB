import React, { useState } from 'react';

const FrontpageContainer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => setIsOpen(!isOpen);

    const newProps = { onClick, isOpen };

    return React.cloneElement(children, { ...newProps });
};

export default FrontpageContainer;