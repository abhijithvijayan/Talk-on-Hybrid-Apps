import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';

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
    padding-top: 1.5rem;
    padding-bottom: 1rem;
`;

const StyledListItem = styled(ListItem)`
    font-family: ${({ theme }) => {
        return theme.railway;
    }};
    font-size: 1em !important;
    line-height: 1.35em;
    color: #dae8f1;
`;

const Slide8 = props => {
    return (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary" {...props}>
            <StyledHeader text="“How does that even work?”" />
            <List bulletStyle="arrow">
                <StyledText style={{ fontSize: '1.2em !important', fontWeight: '600' }}>UI</StyledText>
                <StyledListItem>Instead of utilizing web view, they renders every view component</StyledListItem>

                <StyledText style={{ fontSize: '1.2em !important', fontWeight: '600' }}>Platform</StyledText>
                <StyledListItem>access the native platform APIs</StyledListItem>

                <StyledText style={{ fontSize: '1.2em !important', fontWeight: '600' }}>Engine</StyledText>
                <StyledListItem>
                    The engine’s C/C++ code is compiled with Native Compiler (Android’s NDK or iOS’s LLVM)
                </StyledListItem>
                <StyledListItem>
                    Also could use a bridge to run a language specific code in C/C++ program
                </StyledListItem>
            </List>
        </Slide>
    );
};

export default Slide8;
