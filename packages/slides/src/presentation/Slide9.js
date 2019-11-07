import React from 'react';
import { Slide, Layout, List, ListItem, Image, Heading } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import MainImage from '../assets/images/vsvs.png';

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
    line-height: 1.1em;
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
    height: 310px;
    display: inline-block;
    text-align: left !important;
`;

const Slide9 = props => {
    return (
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" {...props}>
            <StyledHeader text="“Under the hood”" style={{ textAlign: 'center', marginBottom: '2.5rem !important' }} />
            <StyledImage src={MainImage} />
            <Layout style={{ alignItems: 'center' }}>
                <List bulletStyle="arrow">
                    <StyledText style={{ fontSize: '1em !important', fontWeight: '600' }}>React-Native</StyledText>
                    <StyledListItem>Developed by Facebook</StyledListItem>
                    <StyledListItem>Uses JavaScript along with JSX syntax for building views</StyledListItem>
                    <StyledListItem>
                        Requires a JavaScript bridge in order to interact with native elements
                    </StyledListItem>
                    <StyledText style={{ fontSize: '1em !important', fontWeight: '600', paddingTop: '20px' }}>
                        Flutter
                    </StyledText>
                    <StyledListItem>Developed by Google</StyledListItem>
                    <StyledListItem>Utilizes the Dart programming language</StyledListItem>
                    <StyledListItem>Hardware-specific API</StyledListItem>
                </List>
            </Layout>
        </Slide>
    );
};

export default Slide9;
