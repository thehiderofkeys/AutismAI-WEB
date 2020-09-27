import { dashboardStatsRoute } from "./ApiRoutes";

export const getDashboardStats = async () => {
    const res = await fetch(dashboardStatsRoute, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => response.json());
    return JSON.parse(res[0]);
};

export default { getDashboardStats };
