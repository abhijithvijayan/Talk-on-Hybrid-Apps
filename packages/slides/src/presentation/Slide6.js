import React from 'react';
import { Slide, Layout, Fill, List, ListItem, Text, Image, Appear, Heading } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import AllPlatform from '../assets/images/allplatform.png';

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
    font-size: 1.01em !important;
    line-height: 1.35em;
    color: #dae8f1;
`;

const StyledImage = styled(Image)`
    height: 400px;
    display: inline-block;
    margin-left: -2em !important;
    padding-right: 2em !important;
`;

const Slide6 = props => {
    return (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary" {...props}>
            <StyledHeader text="“What gives then?”" />
            <Layout style={{ alignItems: 'center', marginTop: '2em' }}>
                <StyledImage src={AllPlatform} />

                <List bulletStyle="arrow">
                    <Appear>
                        <StyledText style={{ fontSize: '1.2em !important', fontWeight: '600' }}>
                            Truly Cross-Platform Apps
                        </StyledText>
                    </Appear>
                    <Appear>
                        <StyledListItem>multi-platform (Android/iOS/Web/Windows/Linux)</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>high performance, low latency</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>custom UI rendering engine</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>in control of all layers of system</StyledListItem>
                    </Appear>
                </List>
            </Layout>
        </Slide>
    );
};

export default Slide6;
