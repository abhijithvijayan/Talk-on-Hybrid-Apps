import React from 'react';
import { Slide, BlockQuote, Cite, Quote } from 'spectacle';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';

const Slide4 = () => {
    return (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <HeaderText text="Native vs Hybrid Apps" />
        </Slide>
    );
};

export default Slide4;
