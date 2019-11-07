import React from 'react';
import { Slide, Layout, List, ListItem, Image, Heading } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import Frameworks from '../assets/images/Flutter-vs-React.jpg';

const StyledHeader = styled(HeaderText)`
    color: #6aa4c8 !important;
    font-family: ${({ theme }) => {
        return theme.railway;
    }} !important;
    text-transform: none !important;
`;

const StyledListItem = styled(ListItem)`
    font-family: ${({ theme }) => {
        return theme.railway;
    }};
    font-size: 1.01em !important;
    line-height: 1.35em;
    color: #6aa4c8;
`;

const StyledText = styled(Heading)`
    color: #595959 !important;
    font-family: ${({ theme }) => {
        return theme.roboto;
    }} !important;
    text-transform: none !important;
    padding-bottom: 1rem;
`;

const StyledImage = styled(Image)`
    height: 300px;
    display: inline-block;
    margin-left: -2em !important;
    padding-right: 1em !important;
`;

const Slide5 = props => {
    return (
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" {...props}>
            <StyledHeader text="“Best Approach - Native Focussed Hybrid Frameworks”" />
            <Layout style={{ alignItems: 'center', marginTop: '2em' }}>
                <StyledImage src={Frameworks} />
                <List bulletStyle="arrow">
                    <StyledText style={{ fontSize: '1.2em !important', fontWeight: '600' }}>
                        Such as Flutter or React-Native
                    </StyledText>
                    <StyledListItem>Hot reload support</StyledListItem>
                    <StyledListItem>Hardware-specific API</StyledListItem>
                    <StyledListItem>Custom UI Components</StyledListItem>
                </List>
            </Layout>
        </Slide>
    );
};

export default Slide5;
