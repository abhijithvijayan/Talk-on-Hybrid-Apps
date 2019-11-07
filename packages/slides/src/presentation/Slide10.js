import React from 'react';
import { Slide, Layout, List, ListItem, Image } from 'spectacle';
import styled from 'styled-components';

import ReactNative from '../assets/images/rn.png';

const StyledListItem = styled(ListItem)`
    font-family: ${({ theme }) => {
        return theme.railway;
    }};
    font-size: 1.01em !important;
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
            <StyledImage src={ReactNative} />
            <Layout style={{ alignItems: 'center' }}>
                <List bulletStyle="arrow">
                    <StyledListItem>React Native = Native app by means of Javascript and React</StyledListItem>
                    <StyledListItem>Invokes OEM Specific UI (feel of pure native app)</StyledListItem>
                    <StyledListItem>Uses JS bridge to interact with native elements</StyledListItem>
                    <StyledListItem>Bridge assists in converting JS variables to native ones.</StyledListItem>
                </List>
            </Layout>
        </Slide>
    );
};

export default Slide10;
