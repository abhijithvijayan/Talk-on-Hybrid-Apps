import React from 'react';
import { Heading, Slide, List, Appear, ListItem } from 'spectacle';
import styled from 'styled-components';

const StyledHeader = styled(Heading)`
    font-size: 6rem !important;
    margin-bottom: 3rem !important;
    text-align: left;
`;

// https://github.com/FormidableLabs/spectacle/issues/678
const Slide2 = props => {
    return (
        <Slide transition={['fade']} bgColor="gray" textColor="primary" {...props}>
            <StyledHeader size={1} textColor="primary" caps>
                Overview
            </StyledHeader>
            <List bulletStyle="arrow">
                <Appear>
                    <ListItem>Introduction</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Native vs Hybrid Apps</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Dont</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Know</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Demo</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Conclusion</ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default Slide2;
