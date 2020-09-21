import React, {useState, useEffect} from "react";
import { getDashboardStats } from "../services/DashboardStatsService";

const DashboardPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
    const [dashboardStats, setdashboardStats] = useState();

    useEffect(() => {
        function dashboardStatistics() {
            const stats = getDashboardStats();
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
