import React from "react";
import PropTypes from "prop-types";
import { GraphTitle, DashboardContainer, SubTitle } from "./DashboardPageStyles";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";

const age = [
    { name: "Toddler", value: 10 },
    { name: "Child", value: 15 },
    { name: "Teen", value: 30 },
    { name: "Adult", value: 45 }
];
const ageColor = ["#9ac90f", "#fcba03", "#0088FE", "#d45517"];

const gender = [
    { name: "Female", value: 47 },
    { name: "Male", value: 53 }
];
const genderColor = ["#9ac90f", "#fcba03"];

const accuracy = [
    { name: "Group A", value: 97 },
    { name: "Group B", value: 3 }
];
const accuracyColor = ["#9ac90f", "#ffffff"];

const sensitivity = [
    { name: "Group A", value: 98 },
    { name: "Group B", value: 2 }
];
const sensitivityColor = ["#0088FE", "#ffffff"];

const specificity = [
    { name: "Group A", value: 97 },
    { name: "Group B", value: 3 }
];
const specificityColor = ["#d45517", "#ffffff"];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboardpage = ({ handleChange, dashboardStats }) => {
    return (
        <DashboardContainer>
            <SubTitle>This is the DashBoard page.</SubTitle>
            <SubTitle>Total Tests Conducted: 2789</SubTitle>
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
