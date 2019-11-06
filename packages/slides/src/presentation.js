import React, { useState } from 'react';
import { Deck, SlideSet } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';

import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        black: '#000',
        tertiary: '#03A9FC',
        quaternary: '#CECECE',
    },
    {
        primary: 'Montserrat',
    }
);

const Presentation = () => {
    const [slideId, setSlideId] = useState(1);

    return (
        <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
            <SlideSet>
                <Slide1 bgColor="black" />
                <Slide2 slideId={slideId} setSlideId={setSlideId} />
                <Slide3 slideId={slideId} setSlideId={setSlideId} />
                <Slide4 slideId={slideId} setSlideId={setSlideId} />
            </SlideSet>
        </Deck>
    );
};

export default Presentation;
