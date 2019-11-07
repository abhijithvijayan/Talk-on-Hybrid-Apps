import React from 'react';
import { Slide, Layout, List, ListItem, Image, Appear, Heading } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import Flutter from '../assets/images/flutter.png';

const StyledHeader = styled(HeaderText)`
    color: #6aa4c8 !important;
    font-family: ${({ theme }) => {
        return theme.railway;
    }} !important;
    text-transform: none !important;
`;

const StyledText = styled(Heading)`
    color: #dae8f1 !important;
    font-family: ${({ theme }) => {
        return theme.roboto;
    }} !important;
    text-transform: none !important;
    padding-bottom: 1rem;
`;

const StyledListItem = styled(ListItem)`
    font-family: ${({ theme }) => {
        return theme.railway;
    }};
    font-size: 1em !important;
    line-height: 1.35em;
    color: #dae8f1;
`;

const StyledImage = styled(Image)`
    height: 500px;
    display: inline-block;
`;

const Slide10 = props => {
    return (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary" {...props}>
            {/* <StyledHeader text="“What gives then?”" /> */}
            <StyledImage src={Flutter} />
            <Layout style={{ alignItems: 'center' }}>
                <List bulletStyle="arrow">
                    <StyledListItem>Flutter = Native realtime app</StyledListItem>
                    <StyledListItem>Uses its own UI components instead of the OS’s native ones</StyledListItem>
                    <StyledListItem>Engine has most of the native components in the framework</StyledListItem>
                    <StyledListItem>
                        So, it doesn’t always need a bridge to communicate with the native components
                    </StyledListItem>
                </List>
            </Layout>
        </Slide>
    );
};

export default Slide10;
