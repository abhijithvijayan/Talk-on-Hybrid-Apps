import React from 'react';
import styled from 'styled-components';
import { Heading, Layout, Image, Fill, Fit, Text, Slide } from 'spectacle';

import ProImage from '../assets/images/profile.jpg';

const StyledText = styled(Text)`
    font-weight: ${({ theme }) => {
        return theme.medium;
    }};
    font-family: ${({ theme }) => {
        return theme.railway;
    }} !important;
`;

const Slide1 = props => {
    return (
        <Slide transition={['zoom']} bgColor="lightBlue" {...props}>
            <Heading size={1} fit caps lineHeight={2} textColor="primary">
                Hybrid Apps
            </Heading>
            <Layout style={{ justifyContent: 'center', marginBottom: '5em' }}>
                <Fill style={{ maxWidth: '68%' }}>
                    <StyledText style={{ textAlign: 'left' }} textColor="lightWhite">
                        The Art of
                    </StyledText>
                    <StyledText textColor="yellow" margin={10} style={{ paddingLeft: '1em' }}>
                        Being in All Places
                    </StyledText>
                    <StyledText style={{ textAlign: 'right' }} textColor="lightWhite">
                        at Once!
                    </StyledText>
                </Fill>
            </Layout>
            <Layout
                style={{
                    // position: 'relative',
                    position: 'absolute',
                    left: '0px',
                    paddingLeft: '50px',
                    bottom: '67px',
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
                    <StyledText
                        textColor="primary"
                        style={{ margin: 'auto', marginLeft: '10px !important', fontSize: '22px' }}
                    >
                        Abhijith Vijayan
                    </StyledText>
                    <Fit>
                        <StyledText
                            textColor="primary"
                            style={{ margin: 'auto', marginRight: '0px', fontSize: '20px', paddingBottom: '5px' }}
                        >
                            {`${new Date().getDay()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`}
                        </StyledText>
                        <StyledText
                            textColor="primary"
                            style={{ margin: 'auto', marginRight: '55px', fontSize: '20px', paddingTop: '5px' }}
                        >
                            @abhijithvijayan
                        </StyledText>
                    </Fit>
                </Fill>
            </Layout>
        </Slide>
    );
};

export default Slide1;
