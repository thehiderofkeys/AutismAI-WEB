/* Third Party */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import paths from "../../routes/paths";

const UoAImg = "/Images/uoa.png";
const InstaImg = "/Images/insta.png";
const LinkedInImg = "/Images/linkedin.png";
const GoogleImg = "/Images/google.png";

import { Footer, IconImage, SmallText, BigText } from "./footerStyle";

const PageFooter = ({}) => {
    return (
        <Footer>
            <Container>
                <Row className="pb-5 mt-5">
                    <Col className="col-12 col-md-4 mb-4">
                        <Row className="ml-3 ml-xs-5 mt-3">
                            <Col className="col-12 mb-3">
                                <BigText>Connect With Us:</BigText>
                            </Col>
                            <Col className="col-12 d-flex flex-row">
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/autism.artificial.intelligence/"
                                >
                                    <IconImage src={InstaImg} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://unidirectory.auckland.ac.nz/people/profile/reza-shahamiri"
                                >
                                    <IconImage src={UoAImg} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/rezashahamiri/"
                                >
                                    <IconImage src={LinkedInImg} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://scholar.google.co.nz/citations?user=TBKXmF4AAAAJ&hl=en"
                                >
                                    <IconImage src={GoogleImg} />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <Row className="ml-3 ml-xs-5 mt-3">
                            <Col className="col-12 mb-3">
                                <BigText>Related Links</BigText>
                            </Col>
                            <Col className="col-12 mb-2">
                                <SmallText href={paths.DASHBOARD}>Dashboard</SmallText>
                            </Col>
                            <Col className="col-12 mb-2">
                                <SmallText href={paths.ADMIN}>Admin</SmallText>
                            </Col>
                            <Col className="col-12 mb-2">
                                <SmallText href={paths.QUIZ}>Take the Quiz</SmallText>
                            </Col>
                            <Col className="col-12 mb-2">
                                <SmallText href={paths.CONTRIBUTIONS}>Contributions</SmallText>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <Row className="ml-3 ml-xs-5 mt-3">
                            <Col className="col-12 mb-3">
                                <BigText>More Info</BigText>
                            </Col>
                            <Col className="col-12 mb-2">
                                <SmallText href="#" target="_blank">
                                    Autism AI Science
                                </SmallText>
                            </Col>
                            <Col className="col-12 mb-2">
                                <SmallText
                                    href="https://play.google.com/store/apps/developer?id=Seyed+Reza+Shahamiri"
                                    target="_blank"
                                >
                                    Other Apps
                                </SmallText>
                            </Col>
                            <Col className="col-12 mb-2">
                                <SmallText href="mailto: info@rezanet.com" target="_blank">
                                    Contact Us
                                </SmallText>
                            </Col>
                            <Col className="col-12 mb-2">
                                <SmallText
                                    href="https://pubmed.ncbi.nlm.nih.gov/22265366/"
                                    target="_blank"
                                >
                                    Scientific Report
                                </SmallText>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr className="mt-5" style={{ backgroundColor: "white" }} />

                <Row className="mt-5 mb-3">
                    <Col className="col-12 mb-4 text-center">
                        Copyright &copy; Bronze Marsupials 2020. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
};

export default PageFooter;
