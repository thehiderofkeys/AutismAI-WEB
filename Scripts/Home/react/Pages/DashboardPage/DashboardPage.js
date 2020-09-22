import React from "react";
import PropTypes from "prop-types";
import { GraphTitle, DashboardContainer, SubTitle } from "./DashboardPageStyles";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";

const ageColor = ["#9ac90f", "#fcba03", "#0088FE", "#d45517"];
const genderColor = ["#9ac90f", "#fcba03"];
const accuracyColor = ["#9ac90f", "#ffffff"];
const sensitivityColor = ["#0088FE", "#ffffff"];
const specificityColor = ["#d45517", "#ffffff"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboardpage = ({ handleChange, dashboardStats }) => {
    const accuracyStats = Math.round(dashboardStats.Class_Vs_DNN_Accuracy * 10000) / 100; //Need to * by 10000 cause the data from the API is in 0.0000....
    const sensitivityStats = Math.round(dashboardStats.Class_Vs_DNN_Sensitivity * 10000) / 100;
    const specificityStats = Math.round(dashboardStats.Class_Vs_DNN_Specificity * 10000) / 100;
    console.log(dashboardStats.total_participants);

    const age = [
        { name: "Adolescent", value: dashboardStats.no_adolescent_participants },
        { name: "Child", value: dashboardStats.no_child_participants },
        { name: "Baby", value: dashboardStats.no_child_participants },
        { name: "Adult", value: dashboardStats.no_adult_participants }
    ];

    const gender = [
        { name: "Female", value: dashboardStats.no_female_participants },
        { name: "Male", value: dashboardStats.no_male_participants }
    ];

    const accuracy = [
        { name: "Accuracy", value: accuracyStats },
        { name: "Conventional Screening", value: 100 - accuracyStats }
    ];

    const sensitivity = [
        { name: "Sensitivity", value: sensitivityStats },
        { name: "Conventional Screening", value: 100 - sensitivityStats }
    ];

    const specificity = [
        { name: "Specificity", value: specificityStats },
        { name: "Conventional Screening", value: 100 - specificityStats }
    ];

    return (
        <DashboardContainer>
            <SubTitle>This is the DashBoard page.</SubTitle>
            <SubTitle>Total Tests Conducted: {dashboardStats.total_participants}</SubTitle>
            <div>
                <GraphTitle>Age Distrubution Graph</GraphTitle>
                <PieChart width={800} height={200}>
                    <Pie
                        data={age}
                        cx={180}
                        innerRadius={0}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {age.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={ageColor[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div>
                <GraphTitle>Gender Distribution</GraphTitle>
                <PieChart width={800} height={200}>
                    <Pie
                        data={gender}
                        cx={180}
                        innerRadius={0}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {gender.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={genderColor[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div>
                <GraphTitle>Accuracy vs Concentional Sceening</GraphTitle>
                <PieChart width={800} height={200}>
                    <Pie
                        data={accuracy}
                        cx={180}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {accuracy.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={accuracyColor[index % COLORS.length]}
                            />
                        ))}
                        <Label value="Accuracy" position="center" />
                    </Pie>
                </PieChart>
            </div>
            <div>
                <GraphTitle>Sensitivity vs Concentional Sceening</GraphTitle>
                <PieChart width={800} height={200}>
                    <Pie
                        data={sensitivity}
                        cx={180}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {sensitivity.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={specificityColor[index % COLORS.length]}
                            />
                        ))}
                        <Label value="Sensitivity" position="center" />
                    </Pie>
                </PieChart>
            </div>
            <div>
                <GraphTitle>Specificity vs Concentional Sceening</GraphTitle>
                <PieChart width={800} height={200}>
                    <Pie
                        data={specificity}
                        cx={180}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {specificity.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={sensitivityColor[index % COLORS.length]}
                            />
                        ))}
                        <Label value="Specificity" position="center" />
                    </Pie>
                </PieChart>
            </div>
            <p>btw tool tips / additional info for each graph </p>
        </DashboardContainer>
    );
};

Dashboardpage.defaultProps = {
    handleChange: () => {}
};

Dashboardpage.propTypes = {
    handleChange: PropTypes.func
};

export default Dashboardpage;
