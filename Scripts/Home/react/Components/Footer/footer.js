/* Third Party */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import paths from "../../routes/paths";


const UoAImg = "/Images/uoa.png";
const FbImg = "/Images/fb.png";
const InstaImg = "/Images/insta.png";
const LinkedInImg = "/Images/linkedin.png";

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
                                    <a className="text-decoration-none text-reset" href="#">
                                        <IconImage src={InstaImg} />
                                    </a>
                                </Col>
                                <Col className="col-3">
                                    <a className="text-decoration-none text-reset" href="#">
                                        <IconImage src={UoAImg} />
                                    </a>
                                </Col>
                                <Col className="col-3">
                                    <a className="text-decoration-none text-reset" href="#">
                                        <IconImage src={FbImg} />
                                    </a>
                                </Col>
                                <Col className="col-3">
                                    <a className="text-decoration-none text-reset" href="#">
                                        <IconImage src={LinkedInImg} />
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
                                    <a className="text-decoration-none text-reset" href={paths.ADMIN} target="_blank">
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
                                <a className="text-decoration-none text-reset" href="" target="_blank">Other Apps</a>
                            </Col>
                            <Col className="col-12">
                                <a className="text-decoration-none text-reset" href="" target="_blank">Order An App</a>
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
