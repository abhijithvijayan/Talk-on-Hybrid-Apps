import React from 'react';
import styled from 'styled-components';
import { Heading, Layout, Image, Fill, Fit, Text, Slide } from 'spectacle';

import ProImage from '../assets/images/profile.jpg';
import DevicesImage from '../assets/images/last.png';

const StyledHeader = styled(Heading)`
    text-align: center;
    line-height: 3 !important;
    font-size: 3.5rem !important;
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

const Slide15 = props => {
    return (
        <Slide transition={['zoom']} bgColor="primary" {...props}>
            <StyledDeviceImage src={DevicesImage} />
            <StyledHeader textColor="dark">Thank You</StyledHeader>
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

export default Slide15;
