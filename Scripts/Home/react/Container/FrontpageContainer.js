import React, { useState } from 'react';

const FrontpageContainer = ({ children }) => {
    const [autismInfoIsOpen, setAutismIsOpen] = useState(false);
    const [statsInfoIsOpen, setStatsIsOpen] = useState(false);

    const [contributionModal, setContributionModal] = useState(true);

    const toggleContributionModal = () => setContributionModal(!contributionModal);

    const onAutismInfoClick = () => {
        setAutismIsOpen(!autismInfoIsOpen);
    }

    const onStatsInfoClick = () => {
        setStatsIsOpen(!statsInfoIsOpen);
    }

    const newProps = { onAutismInfoClick, autismInfoIsOpen, statsInfoIsOpen, onStatsInfoClick, contributionModal, toggleContributionModal };

    return React.cloneElement(children, { ...newProps });
};

export default FrontpageContainer;