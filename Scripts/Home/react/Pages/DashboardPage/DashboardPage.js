import React from "react";
import PropTypes from "prop-types";
import { GraphTitle, DashboardContainer, TotalTestsNumber, StatsCard,  StatsCardBody, StatsCardTitle, StatsCardColumn} from "./DashboardPageStyles";
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
            <HeaderText>Dashboard</HeaderText>
            <Row>
                <Col className='col-12 col-md-6 col-xl-4 mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Age Distrubution</StatsCardTitle>
                            <StatsPieChart colorArray={ageColor} dataMap={age}/>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 col-xl-4 mb-4 order-1 order-xl-2'>
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
                            <StatsPieChart colorArray={genderColor} dataMap={gender}/>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 d-none d-lg-block mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <StatsCardColumn>
                                <StatsCardTitle>Accuracy vs Concentional Sceening</StatsCardTitle>
                                <StatsPieChart colorArray={accuracyColor} dataMap={accuracy} donut={true} labelValue={accuracy[0].value}/>
                            </StatsCardColumn>
                            <StatsCardColumn>
                                <StatsCardTitle>Sensitivity vs Concentional Sceening</StatsCardTitle>
                                <StatsPieChart colorArray={sensitivityColor} dataMap={sensitivity} donut={true} labelValue={sensitivity[0].value}/>
                            </StatsCardColumn>
                            <StatsCardColumn>
                                <StatsCardTitle>Specificity vs Concentional Sceening</StatsCardTitle>
                                <StatsPieChart colorArray={specificityColor} dataMap={specificity} donut={true} labelValue={specificity[0].value}/>
                            </StatsCardColumn>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 d-block d-lg-none col-md-6 mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Accuracy vs Concentional Sceening</StatsCardTitle>
                            <StatsPieChart colorArray={accuracyColor} dataMap={accuracy} donut={true} labelValue={accuracy[0].value}/>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 d-block d-lg-none col-md-6 mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Sensitivity vs Concentional Sceening</StatsCardTitle>
                            <StatsPieChart colorArray={sensitivityColor} dataMap={sensitivity} donut={true} labelValue={sensitivity[0].value}/>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
                <Col className='col-12 d-block d-lg-none mb-4 order-2'>
                    <StatsCard>
                        <StatsCardBody>
                            <StatsCardTitle>Specificity vs Concentional Sceening</StatsCardTitle>
                            <StatsPieChart colorArray={specificityColor} dataMap={specificity} donut={true} labelValue={specificity[0].value}/>
                        </StatsCardBody>
                    </StatsCard>
                </Col>
            </Row>
        </DashboardContainer>
    );
};

function StatsPieChart({dataMap,colorArray,labelValue,donut=false}){
    return(
        <PieChart width={300} height={250}>
            <Tooltip cursor={false} />
            <Pie
                data={dataMap}
                innerRadius={donut?60:0}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
                isAnimationActive={donut}
            >
                {dataMap.map((entry, index) => (
                    <Cell key={`cell-${index}`}
                        fill={colorArray[index % colorArray.length]}
                        stroke={`rgba(0,0,0,0)`}
                    />
                ))}
                {donut?<Label value={labelValue} position="center" />:<></>}
            </Pie>
        </PieChart>
    );
}

Dashboardpage.defaultProps = {
    handleChange: () => {}
};

Dashboardpage.propTypes = {
    handleChange: PropTypes.func
};

export default Dashboardpage;
