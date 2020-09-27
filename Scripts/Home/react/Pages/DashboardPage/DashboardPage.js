import React from "react";
import PropTypes from "prop-types";
import { GraphTitle, DashboardContainer, TotalTestsNumber, StatsCard,  StatsCardBody, StatsCardTitle } from "./DashboardPageStyles";
import { HeaderText } from "../Frontpage/frontpageStyles";
import { PieChart, Pie, Tooltip, Cell, Label} from "recharts";
import {
    Row,
    Col,
    Container,
} from "reactstrap";

const ageColor = ["#9ac90f", "#fcba03", "#0088FE", "#d45517"];
const genderColor = ["#9ac90f", "#fcba03"];
const accuracyColor = ["#9ac90f", "rgba(0,0,0,0.1)"];
const sensitivityColor = ["#0088FE", "rgba(0,0,0,0.1)"];
const specificityColor = ["#d45517", "rgba(0,0,0,0.1)"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboardpage = ({ handleChange, dashboardStats }) => {
    const accuracyStats = Math.round(dashboardStats.Class_Vs_DNN_Accuracy * 10000) / 100; //Need to * by 10000 cause the data from the API is in 0.0000....
    const sensitivityStats = Math.round(dashboardStats.Class_Vs_DNN_Sensitivity * 10000) / 100;
    const specificityStats = Math.round(dashboardStats.Class_Vs_DNN_Specificity * 10000) / 100;

    const age = [
        { name: "Teen (11 to 16 years old)", value: dashboardStats.no_adolescent_participants },
        { name: "Child (3 to 11 years old)", value: dashboardStats.no_child_participants },
        { name: "Toddler (18 months to 3 years old)", value: dashboardStats.no_child_participants },
        { name: "Adult (16 to 65 years old)", value: dashboardStats.no_adult_participants }
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
            <HeaderText>Autism AI Statistics</HeaderText>
            <Row>
                <Col className='col-12 col-md-6 col-xl-4 mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Age Distrubution</StatsCardTitle>
                            <PieChart width={300} height={250}>
                                <Tooltip cursor={false} />
                                <Pie
                                    data={age}
                                    innerRadius={0}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                    isAnimationActive={false}
                                >
                                    {age.map((entry, index) => (
                                        <Cell key={`cell-${index}`}
                                            fill={ageColor[index % COLORS.length]}
                                            stroke={`rgba(0,0,0,0)`}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 col-md-6 col-xl-4 mb-4 order-1 order-xl-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Total Tests Conducted</StatsCardTitle>
                            <TotalTestsNumber>{dashboardStats.total_participants}</TotalTestsNumber>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 col-md-6 col-xl-4 mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Gender Distribution</StatsCardTitle>
                            <PieChart width={300} height={250}>
                                <Tooltip cursor={false} />
                                <Pie
                                    data={gender}
                                    innerRadius={0}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                    isAnimationActive={false}
                                >
                                    {gender.map((entry, index) => (
                                        <Cell key={`cell-${index}`}
                                            fill={genderColor[index % COLORS.length]}
                                            stroke={`rgba(0,0,0,0)`}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 col-md-6 col-xl-4 mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Accuracy vs Concentional Sceening</StatsCardTitle>
                            <PieChart width={300} height={250}>
                                <Tooltip cursor={false} />
                                    <Pie
                                        data={accuracy}
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
                                                stroke={`rgba(0,0,0,0)`}
                                            />
                                        ))}
                                    <Label value={accuracy[0].value} position="center" />
                                    </Pie>
                                </PieChart>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 col-md-6 col-xl-4 mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Sensitivity vs Concentional Sceening</StatsCardTitle>
                            <PieChart width={300} height={250}>
                                <Tooltip cursor={false} />
                                    <Pie
                                        data={sensitivity}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label
                                    >
                                        {sensitivity.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={sensitivityColor[index % COLORS.length]}
                                                stroke={`rgba(0,0,0,0)`}
                                            />
                                        ))}
                                        <Label value={sensitivity[0].value} position="center" />
                                    </Pie>
                                </PieChart>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 col-md-6 col-xl-4 mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Specificity vs Concentional Sceening</StatsCardTitle>
                            <PieChart width={300} height={250}>
                                <Tooltip cursor={false}/>
                                    <Pie
                                        data={specificity}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label
                                    >
                                        {specificity.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={specificityColor[index % COLORS.length]}
                                                stroke={`rgba(0,0,0,0)`}
                                            />
                                        ))}
                                    <Label value={specificity[0].value} position="center" />
                                    </Pie>
                                </PieChart>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
            </Row>
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
