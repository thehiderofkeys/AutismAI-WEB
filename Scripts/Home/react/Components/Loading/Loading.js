import React from "react";
import { Spinner } from "reactstrap";
import { LoadingSpinner, LoadingContainer } from "./LoadingStyles";

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingSpinner>
                <Spinner color="primary" style={{ width: '100px', height: '100px' }} />
            </LoadingSpinner>
        </LoadingContainer>
    );
};

export default Loading;
