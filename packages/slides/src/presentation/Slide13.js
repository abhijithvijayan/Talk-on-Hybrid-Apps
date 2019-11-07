import React from 'react';
import { Slide, Image } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import Demo from '../assets/images/live.gif';

const StyledHeader = styled(HeaderText)`
    color: #6aa4c8 !important;
    font-family: ${({ theme }) => {
        return theme.railway;
    }} !important;
    text-transform: none !important;
`;

const StyledImage = styled(Image)`
    width: 1000px;
    display: inline-block;
`;

const Slide10 = props => {
    return (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary" {...props}>
            <StyledHeader text="“Virtual Demo”" style={{ textAlign: 'center', marginBottom: '2.5rem !important' }} />
            <StyledImage src={Demo} />
        </Slide>
    );
};

export default Slide10;
