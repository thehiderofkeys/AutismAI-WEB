import React from "react";
import { Spinner } from 'reactstrap';
import { LoadingStyle } from './LoadingStyles';

const Loading = () => {
    return (
        <LoadingStyle>
            <Spinner color="primary" />
        </LoadingStyle>
    );
};

export default Loading;