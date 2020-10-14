import React, { useState, useEffect } from "react";
import { getDashboardStats } from "../services/StatisticsService";

const FrontpageContainer = ({ children }) => {
    const [autismInfoIsOpen, setAutismIsOpen] = useState(false);
    const [statsInfoIsOpen, setStatsIsOpen] = useState(false);
    const [accuracyStats, setAccuracyStats] = useState({});
    const [sensitivityStats, setSensitivityStats] = useState({});
    const [specificityStats, setSpecificityStats] = useState({});
    const [statCarouselIndex, setStatCarouselIndex] = useState(0);
    const [infoCarouselIndex, setInfoCarouselIndex] = useState(0);

    const [contributionModal, setContributionModal] = useState(true);

    const toggleContributionModal = () => setContributionModal(!contributionModal);

    const onAutismInfoClick = () => {
        setAutismIsOpen(!autismInfoIsOpen);
    };

    const onStatCarouselNext = () =>{
        setStatCarouselIndex(statCarouselIndex === 2 ? 0 : statCarouselIndex + 1);
    }
    const onStatCarouselBack = () =>{
        setStatCarouselIndex(statCarouselIndex === 0 ? 2 : statCarouselIndex - 1);
    }
    const onInfoCarouselNext = () =>{
        setInfoCarouselIndex(infoCarouselIndex === 4 ? 0 : infoCarouselIndex + 1);
    }
    const onInfoCarouselBack = () =>{
        setInfoCarouselIndex(infoCarouselIndex === 0 ? 4 : infoCarouselIndex - 1);
    }

    const onStatsInfoClick = () => {
        setStatsIsOpen(!statsInfoIsOpen);
    };

    useEffect(() => {
        async function getMetrics() {
            const stats = await getDashboardStats();
            const accuracy = Math.round(stats.Class_Vs_DNN_Accuracy * 10000) / 100;
            const sensitivity = Math.round(stats.Class_Vs_DNN_Sensitivity * 10000) / 100;
            const specificity = Math.round(stats.Class_Vs_DNN_Specificity * 10000) / 100;

            const accuracyStats = [
                { name: "", value: accuracy },
                { name: "", value: Math.round((100 - accuracy) * 100) / 100 }
            ];

            const sensitivityStats = [
                { name: "", value: sensitivity },
                { name: "", value: Math.round((100 - sensitivity) * 100) / 100 }
            ];

            const specificityStats = [
                { name: "", value: specificity },
                { name: "", value: Math.round((100 - specificity) * 100) / 100 }
            ];

            setAccuracyStats(accuracyStats);
            setSensitivityStats(sensitivityStats);
            setSpecificityStats(specificityStats);
        }
        getMetrics();
    }, []);

    const newProps = {
        onAutismInfoClick,
        autismInfoIsOpen,
        statsInfoIsOpen,
        onStatsInfoClick,
        contributionModal,
        toggleContributionModal,
        accuracyStats,
        sensitivityStats,
        specificityStats,
        statCarouselIndex,
        onStatCarouselNext,
        onStatCarouselBack,
        infoCarouselIndex,
        onInfoCarouselNext,
        onInfoCarouselBack,
    };

    return React.cloneElement(children, { ...newProps });
};

export default FrontpageContainer;
