import React, { useState, useEffect } from "react";
import { getDashboardStats } from "../services/DashboardStatsService";
import Loading from "../Components/Loading/Loading";

const DashboardPageContainer = ({ children }) => {
    // Any variables or methods declared in newProps will be passed through to children
    // components as declared in frontpage.jsx

    const [dashboardStats, setDashboardStats] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function getDashboardStatistics() {
            const stats = await getDashboardStats();
            console.log(stats);
            setDashboardStats(stats);
            setIsLoading(false);
        }

        getDashboardStatistics();
    }, []);


    const handleChange = () => {
        console.log("handleChange");
    };

    const newProps = { handleChange, dashboardStats, };

    return (
        <>
            {isLoading && <Loading />}
            {React.cloneElement(children, { ...newProps })}
        </>
    );
};

export default DashboardPageContainer;
