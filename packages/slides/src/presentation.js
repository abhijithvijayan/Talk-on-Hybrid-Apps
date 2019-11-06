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
        primary: '#FFFFFF',
        secondary: '#1F2022',
        dark: '#1A1A1A',
        black: '#000',
        tertiary: '#03A9FC',
        quaternary: '#CECECE',
        lightBlue: '#6AA4C8',
        light: '#A1A3A3',
        lightWhite: '#DAE8F1',
    },
    {
        primary: "'Roboto', sans-serif",
    }
);

const Presentation = () => {
    const [slideId, setSlideId] = useState(1);

    return (
        <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
            <SlideSet>
                <Slide1 />
                <Slide2 slideId={slideId} setSlideId={setSlideId} />
                <Slide3 slideId={slideId} setSlideId={setSlideId} />
                <Slide4 slideId={slideId} setSlideId={setSlideId} />
            </SlideSet>
        </Deck>
    );
};

export default Presentation;
