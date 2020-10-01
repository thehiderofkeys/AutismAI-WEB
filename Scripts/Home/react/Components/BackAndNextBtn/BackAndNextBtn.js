import React from "react";
import { Col, Container, ButtonGroup, Button } from "reactstrap";

const BackAndNextBtn = ({
    handlePrevQuestion,
    handleNextQuestion,
    currentQuestion,
    disableNext
}) => {
    return (
        <Container className="d-flex justify-content-center">
            <ButtonGroup
                style={{
                    width: "65%",
                    marginTop: "15px"
                }}
                    >
                    <Button
                        onClick={handlePrevQuestion}
                        className="text-light btn-block"
                        style={{
                            backgroundColor: "#242e4c",
                            border: "1px solid #ced4da",
                            borderRadius: "15px",
                            padding: "12px"
                        }}
                        disabled={currentQuestion <= 0}
                    >
                        {" "}
                        Back{" "}
                    </Button>
                    <Button
                        onClick={handleNextQuestion}
                        className="text-light btn-block"
                        style={{
                            backgroundColor: "#242e4c",
                            border: "1px solid #ced4da",
                            borderRadius: "15px",
                            marginTop: "0px",
                            padding: "12px"
                        }}
                        disabled={disableNext}
                    >
                        {" "}
                        Next{" "}
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default BackAndNextBtn;
