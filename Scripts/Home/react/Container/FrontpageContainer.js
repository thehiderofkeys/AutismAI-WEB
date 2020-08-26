import React, { useState } from 'react';

const FrontpageContainer = ({ children }) => {
    const [autismInfoIsOpen, setAutismIsOpen] = useState(false);

    const onAutismInfoClick = () => {
        setAutismIsOpen(!autismInfoIsOpen);
    }

    const newProps = { onAutismInfoClick, autismInfoIsOpen };

    return React.cloneElement(children, { ...newProps });
};

export default FrontpageContainer;