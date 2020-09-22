import React, { useState, useEffect } from "react";
import { getDashboardStats } from "../services/DashboardStatsService";
import Loading from "../Components/Loading/Loading";

const DashboardPageContainer = ({ children }) => {
    // Any variables or methods declared in newProps will be passed through to children
    // components as declared in frontpage.jsx

    const [dashboardStats, setDashboardStats] = useState({});

    useEffect(() => {
        async function getDashboardStatistics() {
            const stats = await getDashboardStats();
            console.log(stats);
            setDashboardStats(stats);
        }

        getDashboardStatistics();
    }, []);

    const handleChange = () => {
        console.log("handleChange");
    };

    const newProps = { handleChange, dashboardStats };

    return (
        <>
            <Loading/>
            {React.cloneElement(children, { ...newProps })}
        </>
    );
};

export default DashboardPageContainer;
