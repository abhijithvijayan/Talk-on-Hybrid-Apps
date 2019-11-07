import React from 'react';
import { Heading, Slide, List, Layout, Image, Fill, ListItem } from 'spectacle';
import styled from 'styled-components';

import CrossPlaform from '../assets/images/cross-platform-technologies-solution.png';

const StyledHeader = styled(Heading)`
    font-size: 6rem !important;
    margin-bottom: 3rem !important;
    text-align: left;
`;

const StyledListItem = styled(ListItem)`
    font-family: ${({ theme }) => {
        return theme.railway;
    }};
    font-size: 1.12em !important;
    line-height: 1.3em;
`;

// https://github.com/FormidableLabs/spectacle/issues/678
const Slide2 = props => {
    return (
        <Slide transition={['fade']} bgColor="gray" textColor="primary" {...props}>
            <StyledHeader size={1} textColor="primary" caps>
                Overview
            </StyledHeader>
            <Layout>
                <Fill style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <List bulletStyle="arrow">
                        <StyledListItem>Introduction</StyledListItem>
                        <StyledListItem>The Downsides of Native</StyledListItem>
                        <StyledListItem>Conventional PWA</StyledListItem>
                        <StyledListItem>Best Approach</StyledListItem>
                        <StyledListItem>Working: Under the hood</StyledListItem>
                        <StyledListItem>Virtual Demo</StyledListItem>
                        <StyledListItem>Conclusion</StyledListItem>
                    </List>
                    <Image
                        src={CrossPlaform}
                        style={{
                            height: '8em',
                            width: 'auto',
                            margin: 0,
                            display: 'inline-block',
                        }}
                    />
                </Fill>
            </Layout>
        </Slide>
    );
};

export default Slide2;
