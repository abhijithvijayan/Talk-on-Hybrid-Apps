import React from 'react';
import { Text } from 'spectacle';
import styled from 'styled-components';

const TopCornerText = styled(Text)`
    position: absolute;
    top: 5px;
    right: 30px;
    font-family: ${({ theme }) => {
        return theme.railway;
    }} !important;
    font-weight: ${({ theme }) => {
        return theme.bold;
    }};
`;

const SlideId = ({ slideId }) => {
    return <TopCornerText>{slideId}</TopCornerText>;
};

export default SlideId;
