import React from "react";
import { Col, Container, ButtonGroup, Button } from "reactstrap";

const BackAndNextBtn = ({ handlePrevQuestion, handleNextQuestion, currentQuestion }) => {
    const onClick = (event) => {
        handleChange({ });
    };

    return (
        <Container className="d-flex justify-content-center mt-4">

            <Col style={{
                maxWidth: "15%",
            }}> 
                <ButtonGroup >
                    <Button onClick={handlePrevQuestion}
                        className="text-dark"
                        style={{
                            backgroundColor: '#ebf0ff',
                            border: "1px solid #ced4da"
                        }} disabled={currentQuestion <= 0}>
                        {" "}
                Back{" "}
                    </Button>
                    <Button onClick={handleNextQuestion}
                        className="text-dark"
                        style={{
                            backgroundColor: '#ebf0ff',
                            border: "1px solid #ced4da"
                        }}
                    > Next </Button>
                </ButtonGroup>
            </Col>
        </Container>
    );
};

export default BackAndNextBtn;
