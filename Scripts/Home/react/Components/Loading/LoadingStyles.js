import styled from "styled-components";

export const LoadingSpinner = styled.div`
    position: fixed;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    z-index: 1000;
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 100;
    position: fixed;
    background-color: rgba(128, 128, 128, 0.5);
`;
