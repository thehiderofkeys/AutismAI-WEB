import React from "react";
import PropTypes from "prop-types";
import { GraphTitle, DashboardContainer, SubTitle, GraphCol, TestsTaken, SmallSubTitle, TotalTestsNumber, GraphContainer } from "./DashboardPageStyles";
import { HeaderText } from "../Frontpage/frontpageStyles";
import { PieChart, Pie, Tooltip, Cell, Label, Legend } from "recharts";
import {
    Row,
    Col,
    Container,
    Collapse,
    Button,
    CardBody,
    Card,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
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
            <HeaderText>Autism AI Statistics</HeaderText>
            <Row>
                <Col className="d-flex justify-content-center mb-5">
                    <div>
                        <GraphTitle>Age Distrubution</GraphTitle>
                        <PieChart width={370} height={250}>
                            <Tooltip cursor={false} />
                            {/*<Legend layout="vertical" align="left" verticalAlign="middle" />*/}
                            <Pie
                                data={age}
                                cx={180}
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
                    </div>
                    <TestsTaken>
                        <SmallSubTitle>Total Tests</SmallSubTitle>
                        <TotalTestsNumber>{dashboardStats.total_participants}</TotalTestsNumber>
                    </TestsTaken>
                    <div>
                        <GraphTitle>Gender Distribution</GraphTitle>
                        <PieChart width={370} height={250}>
                            <Tooltip cursor={false} />
                            <Pie
                                data={gender}
                                cx={180}
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
                    </div>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center mb-5">
                        <GraphContainer>
                            <PieChart width={370} height={200}>
                                <Tooltip cursor={false} />
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
                                                stroke={`rgba(0,0,0,0)`}
                                            />
                                        ))}
                                    <Label value={accuracy[0].value} position="center" />
                                    </Pie>
                                </PieChart>
                                <GraphTitle>Accuracy vs Concentional Sceening</GraphTitle>
                        </GraphContainer>
                        <GraphContainer>
                            <PieChart width={370} height={200}>
                                <Tooltip cursor={false} />
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
                                                fill={sensitivityColor[index % COLORS.length]}
                                                stroke={`rgba(0,0,0,0)`}
                                            />
                                        ))}
                                        <Label value={sensitivity[0].value} position="center" />
                                    </Pie>
                                </PieChart>
                                <GraphTitle>Sensitivity vs Concentional Sceening</GraphTitle>
                            </GraphContainer>
                            <GraphContainer>
                            <PieChart width={370} height={200}>
                                <Tooltip cursor={false}/>
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
                                                fill={specificityColor[index % COLORS.length]}
                                                stroke={`rgba(0,0,0,0)`}
                                            />
                                        ))}
                                    <Label value={specificity[0].value} position="center" />
                                    </Pie>
                                </PieChart>
                                <GraphTitle>Specificity vs Concentional Sceening</GraphTitle>
                            </GraphContainer>
                    </Col>
                </Row>
            </Container>
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
