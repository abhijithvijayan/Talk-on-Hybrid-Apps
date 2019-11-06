import React from 'react';
import styled from 'styled-components';
import { Heading, Layout, Image, Fill, Fit, Text, Slide } from 'spectacle';

import ProImage from '../assets/images/profile.jpg';
import DevicesImage from '../assets/images/devices.png';

const StyledHeader = styled(Heading)`
    text-align: center;
    font-size: 2.7rem !important;
`;

const StyledText = styled(Text)`
    font-size: 2rem !important;
    font-weight: ${({ theme }) => {
        return theme.medium;
    }};
    font-family: ${({ theme }) => {
        return theme.railway;
    }} !important;
`;

const StyledSecondaryText = styled(Text)`
    font-weight: ${({ theme }) => {
        return theme.medium;
    }};
    font-family: ${({ theme }) => {
        return theme.railway;
    }} !important;
    letter-spacing: 1px;
`;

const StyledDeviceImage = styled(Image)`
    height: 8em;
    width: auto;
    margin: 0;
    display: inline-block;
`;

const Slide1 = props => {
    return (
        <Slide transition={['zoom']} bgColor="primary" {...props}>
            <StyledDeviceImage src={DevicesImage} />
            <StyledHeader lineHeight={4} textColor="dark">
                Hybrid Multi-Cross Platform Apps
            </StyledHeader>
            <Layout style={{ justifyContent: 'center', marginBottom: '5em' }}>
                <Fill style={{ maxWidth: '50%' }}>
                    <StyledText style={{ textAlign: 'left' }} textColor="secondary">
                        The Art of
                    </StyledText>
                    <StyledText
                        textColor="secondary"
                        margin={10}
                        style={{ textDecoration: 'underline', paddingLeft: '0.7em' }}
                    >
                        Being in All Places
                    </StyledText>
                    <StyledText style={{ textAlign: 'right' }} textColor="secondary">
                        at Once!
                    </StyledText>
                </Fill>
            </Layout>
            <Layout
                style={{
                    position: 'absolute',
                    left: '0px',
                    paddingLeft: '50px',
                    bottom: '55px',
                    width: '100%',
                }}
            >
                <Fill style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Image
                        src={ProImage}
                        style={{
                            height: '50px',
                            width: 'auto',
                            borderRadius: '50%',
                            margin: 0,
                            display: 'inline-block',
                        }}
                    />
                    <StyledSecondaryText
                        textColor="black"
                        style={{ margin: 'auto', marginLeft: '10px !important', fontSize: '22px' }}
                    >
                        Abhijith Vijayan
                    </StyledSecondaryText>
                    <Fit>
                        <StyledSecondaryText
                            textColor="black"
                            style={{ margin: 'auto', marginRight: '0px', fontSize: '20px', paddingBottom: '5px' }}
                        >
                            {`${new Date().getDay()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`}
                        </StyledSecondaryText>
                        <StyledSecondaryText
                            textColor="black"
                            style={{ margin: 'auto', marginRight: '55px', fontSize: '20px', paddingTop: '5px' }}
                        >
                            @abhijithvijayan
                        </StyledSecondaryText>
                    </Fit>
                </Fill>
            </Layout>
        </Slide>
    );
};

export default Slide1;
