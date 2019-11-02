import React from 'react';
import { Heading, Text, Slide } from 'spectacle';

const Slide1 = () => {
    return (
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Hybrid Apps
            </Heading>
        </Slide>
    );
};

export default Slide1;
