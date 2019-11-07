import React from 'react';
import { Slide, Layout, List, ListItem, Fill, Image, Appear } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import MultiPlatform from '../assets/images/multip.png';

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
    font-size: 0.9em !important;
    line-height: 1.35em;
    color: #6aa4c8;
`;

const StyledImage = styled(Image)`
    height: 350px;
    display: inline-block;
`;

const Slide14 = props => {
    return (
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" {...props}>
            <StyledHeader text="“Pros & Cons”" style={{ textAlign: 'center' }} />
            <StyledImage src={MultiPlatform} />
            <Layout style={{ alignItems: 'center', marginTop: '1.5em' }}>
                <Fill>
                    <Appear>
                        <StyledListItem style={{ fontSize: '1.2em !important', fontWeight: '600' }}>
                            Pros
                        </StyledListItem>
                    </Appear>
                    <List bulletStyle="arrow" style={{}}>
                        <Appear>
                            <StyledListItem>Reusable Code Components</StyledListItem>
                        </Appear>
                        <Appear>
                            <StyledListItem>Speed</StyledListItem>
                        </Appear>
                        <Appear>
                            <StyledListItem>Reduced Costs</StyledListItem>
                        </Appear>
                    </List>
                </Fill>
                <Fill>
                    <Appear>
                        <StyledListItem style={{ fontSize: '1.2em !important', fontWeight: '600' }}>
                            Cons
                        </StyledListItem>
                    </Appear>
                    <List bulletStyle="arrow" style={{}}>
                        <Appear>
                            <StyledListItem>Performance glitches</StyledListItem>
                        </Appear>
                        <Appear>
                            <StyledListItem>User experience issues</StyledListItem>
                        </Appear>
                        <Appear>
                            <StyledListItem>In the non-mature stage</StyledListItem>
                        </Appear>
                    </List>
                </Fill>
            </Layout>
        </Slide>
    );
};

export default Slide14;
