/* Third Party */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import paths from "../../routes/paths";


const UoAImg = "/Images/uoa.png";
const InstaImg = "/Images/insta.png";
const LinkedInImg = "/Images/linkedin.png";
const GoogleImg = "/Images/google.png";

import { Footer, IconImage } from "./footerStyle"



class PageFooter extends React.Component {

    render() {
        return (
            <Footer>
                <Container>
                    <Row className="mt-3">
                        <Col className="col-12 col-lg-6 mb-4">
                            <Row>
                                <Col className="col-12 mb-2">
                                    Connect with us
                                </Col>
                                <Col className="col-3">
                                    <a className="text-decoration-none text-reset" target="_blank" href="https://www.instagram.com/autism.artificial.intelligence/">
                                        <IconImage src={InstaImg} />
                                    </a>
                                </Col>
                                <Col className="col-3">
                                    <a className="text-decoration-none text-reset" target="_blank" href="https://unidirectory.auckland.ac.nz/people/profile/reza-shahamiri">
                                        <IconImage src={UoAImg} />
                                    </a>
                                </Col>
                                <Col className="col-3">
                                    <a className="text-decoration-none text-reset" target="_blank" href="https://www.linkedin.com/in/rezashahamiri/">
                                        <IconImage src={LinkedInImg} />
                                    </a>
                                </Col>
                                <Col className="col-3">
                                    <a className="text-decoration-none text-reset" target="_blank" href="https://scholar.google.co.nz/citations?user=TBKXmF4AAAAJ&hl=en">
                                        <IconImage src={GoogleImg} />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-6 col-lg-3">
                            <Row className="ml-xs-5">
                                <Col className="col-12">
                                    <a className="text-decoration-none text-reset" href={paths.DASHBOARD}>
                                        Dashboard
                                    </a>
                                </Col>
                                <Col className="col-12">
                                    <a className="text-decoration-none text-reset" href={paths.ADMIN}>
                                        Admin
                                    </a>
                                </Col>
                                <Col className="col-12">
                                    <a className="text-decoration-none text-reset" href={paths.QUIZ}>
                                        Take the Quiz
                                    </a>
                                </Col>
                                <Col className="col-12">
                                    <a className="text-decoration-none text-reset" href={paths.CONTRIBUTIONS}>
                                        Contributions
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-6 col-lg-3">
                            <Col className="col-12">
                                <a className="text-decoration-none text-reset" href="#" target="_blank">Autism AI Science</a>
                            </Col>
                            <Col className="col-12">
                                <a className="text-decoration-none text-reset" href="https://play.google.com/store/apps/developer?id=Seyed+Reza+Shahamiri" target="_blank">Other Apps</a>
                            </Col>
                            <Col className="col-12">
                                <a className="text-decoration-none text-reset" href="mailto: info@rezanet.com" target="_blank">Contact Us</a>
                            </Col>
                            <Col className="col-12">
                                <a className="text-decoration-none text-reset" href="https://pubmed.ncbi.nlm.nih.gov/22265366/" target="_blank">Scientific Report</a>
                            </Col>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-12 mb-4 text-center">
                            Copyright &copy; Brownze Marsupials 2020. All rights reserved.
                        </Col>
                    </Row>

                </Container>
            </Footer>
        );
    }
}

export default PageFooter;
