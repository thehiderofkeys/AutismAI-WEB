import React from 'react';
import { Header, HeaderText, SubText, HeaderImage, Wave, InnerContainer } from './style';
import { Row, Col, Container } from 'reactstrap';

const Frontpage = ({ onClick }) => {
    return (
        <>
            <Container>
                <InnerContainer>

                    <Row>
                        <Col>
                            <Header>
                                <HeaderText>
                                    The Calendar With Everyone, For Everyone
                                </HeaderText>
                                <SubText className="d-none d-md-flex">
                                    Gain access to the schedule of your group and
                                    create events which are integrated with Google Calendars.
                                 </SubText>
                            </Header>
                        </Col>
                    </Row>

                </InnerContainer>


                <Row>
                    <Col className="d-flex justify-content-center ">
                        Test
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default Frontpage;
