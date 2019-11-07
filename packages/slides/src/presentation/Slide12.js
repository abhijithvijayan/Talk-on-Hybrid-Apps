import React from 'react';
import { Slide, Layout, List, ListItem, Image, Heading } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import CrossPlatformGif from '../assets/images/cross-multi.gif';

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
    font-size: 1.6rem !important;
    line-height: 1.5em;
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
    height: 440px;
    display: inline-block;
    text-align: left !important;
`;

const Slide12 = props => {
    return (
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" {...props}>
            <StyledHeader
                text="“Write Once, Run Anywhere”"
                style={{ textAlign: 'center', marginBottom: '2.5rem !important' }}
            />
            <StyledImage src={CrossPlatformGif} />
            <Layout style={{ alignItems: 'center' }}>
                <List bulletStyle="arrow">
                    <StyledText style={{ fontSize: '1em !important', fontWeight: '600' }}>Aims to..</StyledText>
                    <StyledListItem>
                        build for web, desktop, mobile, and embedded platforms like Raspberry Pi.
                    </StyledListItem>
                    <StyledListItem>use Single Codebase (lots of code sharing)</StyledListItem>
                    <StyledListItem>
                        provide platform specific code even while building from single codebase
                    </StyledListItem>
                </List>
            </Layout>
        </Slide>
    );
};

export default Slide12;
