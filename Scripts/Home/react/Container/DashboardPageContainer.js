import React, {useState, useEffect} from "react";
import { getDashboardStats } from "../services/DashboardStatsService";

const DashboardPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
    const [dashboardStats, setdashboardStats] = useState();

    useEffect(() => {
        async function dashboardStatistics() {
            const stats = await getDashboardStats();
            setdashboardStats(stats);
        }

        dashboardStatistics();
        console.log(dashboardStats);
    }, []);

  const handleChange = () => {
    console.log("handleChange");
  };

  const newProps = { handleChange, dashboardStats };

  return React.cloneElement(children, { ...newProps });
};

export default DashboardPageContainer;
