import React from 'react';
import { Slide, Layout, List, ListItem, Image, Appear } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import PWA from '../assets/images/pwa.jpg';

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

const StyledImage = styled(Image)`
    height: 300px;
    display: inline-block;
    margin-left: -2em !important;
    padding-right: 1em !important;
`;

const Slide5 = props => {
    return (
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" {...props}>
            <StyledHeader text="“Isn't PWA an alternative?”" />
            <Layout style={{ alignItems: 'center', marginTop: '2em' }}>
                <StyledImage src={PWA} />
                <List bulletStyle="arrow">
                    <Appear>
                        <StyledListItem style={{ fontSize: '1.2em !important', fontWeight: '600' }}>
                            Nope! because of...
                        </StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>slow performance</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>limited access to OS features</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>lacking capabilities as they run in a browser.</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>Afterall, they are websites wrapped in apps</StyledListItem>
                    </Appear>
                </List>
            </Layout>
        </Slide>
    );
};

export default Slide5;
