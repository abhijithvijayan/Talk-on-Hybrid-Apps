import React from 'react';
import { Slide, Layout, Fill, List, ListItem, Image } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import PlatformImage from '../assets/images/platforms.png';

const StyledHeader = styled(HeaderText)`
    color: #6aa4c8 !important;
`;

const StyledListItem = styled(ListItem)`
    font-family: ${({ theme }) => {
        return theme.railway;
    }};
    font-size: 1.12em !important;
    line-height: 1.35em;
`;

const StyledImage = styled(Image)`
    height: 220px;
    display: inline-block;
    margin-left: -2em !important;
    padding-right: 1em !important;
`;

const Slide4 = () => {
    return (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <StyledHeader text="The Downsides of Native" />
            <Layout style={{ alignItems: 'center', marginTop: '2em' }}>
                <StyledImage src={PlatformImage} />
                <Fill
                    style={{
                        minWidth: '90%',
                    }}
                >
                    <List bulletStyle="arrow">
                        <StyledListItem>Proficiency in each platform required</StyledListItem>
                        <StyledListItem>Entirely separate code bases</StyledListItem>
                        <StyledListItem>Timely & expensive development</StyledListItem>
                        <StyledListItem>No code reuse</StyledListItem>
                    </List>
                </Fill>
            </Layout>
        </Slide>
    );
};

export default Slide4;
