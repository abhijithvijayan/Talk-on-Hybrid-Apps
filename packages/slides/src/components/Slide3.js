import React from 'react';
import { Slide, Heading, Text, List, Image, Layout, Fill, ListItem } from 'spectacle';
import styled from 'styled-components';

import MultiPlatform from '../assets/images/multi2.png';

const StyledHeader = styled(Heading)`
    font-size: 4rem !important;
    margin-bottom: 3rem !important;
    text-align: left;
`;
const StyledText = styled(Text)`
    text-align: left;
    padding-top: 1em;
    font-size: 2.2rem !important;
`;

const StyledListItem = styled(ListItem)`
    font-family: ${({ theme }) => {
        return theme.railway;
    }};
    font-size: 1.12em !important;
    line-height: 1.4em;
`;

const StyledImage = styled(Image)`
    height: 200px;
`;

const Slide3 = props => {
    return (
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" {...props}>
            <StyledHeader textColor="secondary" caps>
                Introduction
            </StyledHeader>
            <StyledText>Hybrid Multi-Cross Platform Apps are:</StyledText>
            <Layout>
                <Fill style={{ display: 'flex', alignItems: 'center' }}>
                    <List bulletStyle="greenCheck" style={{ minWidth: '95%' }}>
                        <StyledListItem>Applications that can be installed anywhere</StyledListItem>
                        <StyledListItem>close-to-native UX.</StyledListItem>
                        <StyledListItem>Code shareability | Single Codebase</StyledListItem>
                        <StyledListItem>Cost-effective production</StyledListItem>
                    </List>
                    <StyledImage src={MultiPlatform} />
                </Fill>
            </Layout>
        </Slide>
    );
};

export default Slide3;
