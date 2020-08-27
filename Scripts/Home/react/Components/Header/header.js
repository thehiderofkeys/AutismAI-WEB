/* Third Party */
import React from 'react';
import { Row, Col, Button } from 'reactstrap';

/* Components */
import { Center, Logo, Link } from './headerStyle';

/* Functions */

const AutismAILight = "/Images/logoLight.png";
const AutismAIDark = "/Images/logoDark.png";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marketingPage: {
                backgroundColor: '#242e4c', position: 'fixed', top: '0',
                boxShadow: 'none'
            },
            link: { color: 'white'},
            scroll: false,
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const backgroundcolor = window.scrollY < 10 ? '#242e4c' : 'white';
            const linkColor = window.scrollY > 10 ? 'black' : 'white';
            const shadow = window.scrollY < 10 ? 'none' : '2px 2px 10px grey';
            const scrolling = window.scrollY < 10 ? false : true;
            this.setState({
                marketingPage: { backgroundColor: backgroundcolor, boxShadow: shadow, position: 'fixed', top: '0' },
                scroll: scrolling,
                link: { color: linkColor }
            });
        });
    }

    render() {
        return (
            <Center style={this.state.marketingPage}>
                <Row className="w-100 d-flex align-items-center">
                    <Col className="col-3 d-flex justify-content-center align-center">
                        <Logo src={this.state.scroll ? AutismAIDark : AutismAILight} alt="Logo" />
                    </Col>
                    <Col className="col-2 d-flex justify-content-center align-center">
                        <Link href='https://www.google.com/' style={this.state.link}>
                                Help
                        </Link>
                    </Col>
                    <Col className="col-2 d-flex justify-content-center align-center">
                        <Link href='https://www.google.com/' style={this.state.link}>
                            People
                        </Link>
                    </Col>
                    <Col className="col-2 d-flex justify-content-center align-center">
                        <Link href='https://www.google.com/' style={this.state.link}>
                            Contact Us
                        </Link>
                    </Col>
                    <Col className="col-3 d-flex justify-content-center align-center">
                        <Button color='primary'> Take Quiz </Button>
                    </Col>
                </Row>
            </Center>
        );
    }
}

export default Header;
