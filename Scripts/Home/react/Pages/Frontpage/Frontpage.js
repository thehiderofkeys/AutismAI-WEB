﻿import React from 'react';
import {
    Header, HeaderText, SubText, HeaderImage, InnerContainer,
    BigText, Description, Text, Wave
} from './style';
import { Row, Col, Container, Collapse, Button, CardBody, Card, } from 'reactstrap';

const Placeholder = "/Images/calendar.png";
const WaveFile = "/Images/wave.svg";

const Frontpage = ({ onClick, isOpen }) => {
    return (
        <>
            <InnerContainer>
                <Container>
                    <Row>
                        <Col>
                            <Header>
                                <HeaderText>
                                    Autism Artificial Intelligence
                                </HeaderText>
                                <SubText className="d-none d-md-flex">
                                    This screening application uses Artificial Intelligence to determine if there
                                    are any Autism Spectrum Disorder (ASD) traits in individuals more than 18 months old.
                                 </SubText>
                                <Button color="primary" className="mt-3">
                                    Take Quiz
                                 </Button>
                            </Header>
                        </Col>
                    </Row>
                </Container>
            </InnerContainer>

            <Wave src={WaveFile} />

            <Container>
                <Row>
                    <Col className="d-flex justify-content-center ">
                        <HeaderImage src={Placeholder} />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col className="d-flex justify-content-center mb-5">
                        <Description>
                            <Card>
                                <CardBody>
                                    <BigText>
                                        What is Autism AI?
                                    </BigText>
                                    <Text className="mt-3">
                                        Autism Al is the first and novel autism screening system,
                                        scientifically verified and published, that replaces the conventional scoring
                                        functions in classic screening methods with advanced Artificial Intelligence (Al)
                                        algorithms. It utilizes a deep learning approach commonly used to enable computers
                                        to see called Deep Convolutional Neural Network that we designed to see and detect
                                        behavioral indicators associated with ASD.
                                    </Text>
                                    <Button color="primary" className="mt-3" onClick={onClick}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Collapse isOpen={isOpen}>
                                <Card>
                                    <CardBody>
                                        <Text className="mt-3 font-weight-bold">
                                            Where did the ASD behaviorual indicators
                                            used in Autism Al come from?
                                         </Text>
                                        <Text className="mt-1">
                                            The Al is created based on ASD indicators used in Autism Spectrum Quotient (AQ-10) 
                                            (for Adult, Adolescent, and Child versions) and the Quantitative Checklist for 
                                            Autism in Toddlers (Q-CHAT-10) scientific ASD screening methods published here.
                                            AQ-10 is recommended by National Institute for Health and Care Excellence, The 
                                            United Kingdom, for ASD assessments of adults.  
                                        </Text>
                                        <Text className="mt-3 font-weight-bold">
                                            How was Autism Al verified?
                                         </Text>
                                        <Text className="mt-1">
                                            The Al was evaluated against a large autism dataset consisting of adult, 
                                            adolescent, child, and toddler cases and controls. In our testing Autism Al 
                                            delivered average testing accuracy of 97.95% with a mean sensitivity of 95.53% 
                                            and specificity of 98.63% while AQ-10 and Q-CHAT-10 methods were considered to 
                                            provide correct classification results. 
                                        </Text>
                                        <Text className="mt-3 font-weight-bold">
                                            What are Autism Al limitations?
                                         </Text>
                                        <Text className="mt-1">
                                            Until we get enough control data obtained from individuals with formal ASD 
                                            diagnosis, Autism Al relies on AQ-10 and Q-CHAT-10 screening technologies to 
                                            learn about ASD. While these screening technologies have been scientifically
                                            verified and evaluated, their capabilities are limited as such Autism Al's 
                                            capabilities. Please note that NO ASD screening method, including Autism Al,
                                            is fully accurate and false results are always a possibility especially when 
                                            other mental health conditions are presence in the subject. The only way to 
                                            accurately diagnose ASD is via licenced health professionals. Nevertheless, 
                                            by finding behavioral similarities between the respondent and previous autistic 
                                            individuals whom their anonymized data were used to teach Autism Al, Autism Al 
                                            brings a new perspective to ASD screening. As more people use Autism Al it 
                                            becomes smarter and learns new ASD behavioral indicators, especially when users
                                            with formal ASD diagnosis use the system since it can rely on those verified 
                                            diagnosis to get more accurate. 
                                        </Text>
                                        <Text className="mt-3 font-weight-bold">
                                            Has Autism Al been scientifically verified? 
                                         </Text>
                                        <Text className="mt-1">
                                            Yes, Autism AI has been scientifically verified, academically peer-reviewed, 
                                            and published. For detailed, scientific specification and how Autism Al was
                                            designed and verified please refer here.
                                        </Text>
                                    </CardBody>
                                </Card>
                            </Collapse>

                        </Description>
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default Frontpage;
