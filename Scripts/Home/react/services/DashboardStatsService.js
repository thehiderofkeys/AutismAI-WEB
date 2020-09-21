import { dashboardStatsRoute } from "./ApiRoutes";

export const getDashboardStats = async () => {
    const res = await fetch(dashboardStatsRoute, {
        method: "GET",

    }).then(response => response.json());
    return res;
};

export default { getDashboardStats };