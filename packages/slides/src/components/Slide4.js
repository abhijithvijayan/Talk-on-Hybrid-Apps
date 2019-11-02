import React from 'react';
import { Slide, BlockQuote, Cite, Quote } from 'spectacle';

const Slide4 = () => {
    return (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <BlockQuote>
                <Quote>Example Quote</Quote>
                <Cite>Author</Cite>
            </BlockQuote>
        </Slide>
    );
};

export default Slide4;
