import React, { useState, useEffect } from 'react';
import { getDashboardStats } from "../services/DashboardStatsService";


const FrontpageContainer = ({ children }) => {
    const [autismInfoIsOpen, setAutismIsOpen] = useState(false);
    const [statsInfoIsOpen, setStatsIsOpen] = useState(false);
    const [accuracyStats, setAccuracyStats] = useState({});
    const [sensitivityStats, setSensitivityStats] = useState({});
    const [specificityStats, setSpecificityStats] = useState({});
    const [ageDistributionStats, setAgeDistribution] = useState({});
    const [genderDistributionStats, setGenderDistribution] = useState({});

    const [contributionModal, setContributionModal] = useState(true);

    const toggleContributionModal = () => setContributionModal(!contributionModal);

    const onAutismInfoClick = () => {
        setAutismIsOpen(!autismInfoIsOpen);
    }

    const onStatsInfoClick = () => {
        setStatsIsOpen(!statsInfoIsOpen);
    }


    useEffect(() => {
        async function getMetrics() {
            const stats = await getDashboardStats();
            console.log(stats);
            console.log(stats.Class_Vs_DNN_Accuracy);
            const accuracy = [
                { name: "Class", value: (stats.Class_Vs_DNN_Accuracy) * 100 },
                { name: "DNN", value: 100 - ((stats.Class_Vs_DNN_Accuracy) * 100)}
            ];

            const sensitivity = [
                { name: "Class", value: (stats.Class_Vs_DNN_Sensitivity) * 100  },
                { name: "DNN", value: 100 - ((stats.Class_Vs_DNN_Sensitivity) * 100) }
            ];

            const specificity = [
                { name: "Class", value: (stats.Class_Vs_DNN_Specificity) * 100 },
                { name: "DNN", value: 100 - ((stats.Class_Vs_DNN_Specificity) * 100) }
            ];

            const ageDistribution = [
                { name: "Adolescent", value: stats.no_adolescent_participants },
                { name: "Adult", value: stats.no_adult_participants },
                { name: "Baby", value: stats.no_baby_participants },
                { name: "Child", value: stats.no_child_participants }
            ];

            const genderDistribution = [
                { name: "Male", value: stats.no_male_participants },
                { name: "Female", value: stats.no_female_participants }
            ];

            setAccuracyStats(accuracy);
            setSensitivityStats(sensitivity);
            setSpecificityStats(specificity);
            setAgeDistribution(ageDistribution);
            setGenderDistribution(genderDistribution);
        }

        getMetrics();
    }, []);

    const newProps = {
        onAutismInfoClick, autismInfoIsOpen, statsInfoIsOpen,
        onStatsInfoClick, contributionModal, toggleContributionModal,
        accuracyStats, sensitivityStats, specificityStats,
        ageDistributionStats, genderDistributionStats
    };

    return React.cloneElement(children, { ...newProps });
};

export default FrontpageContainer;