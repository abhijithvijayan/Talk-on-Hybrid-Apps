import React from 'react';
import { Deck, SlideSet } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';

import Slide1 from './presentation/Slide1';
import Slide2 from './presentation/Slide2';
import Slide3 from './presentation/Slide3';
import Slide4 from './presentation/Slide4';
import Slide5 from './presentation/Slide5';
import Slide6 from './presentation/Slide6';
import Slide7 from './presentation/Slide7';
import Slide8 from './presentation/Slide8';
import Slide9 from './presentation/Slide9';

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
        grayWhite: '#329988',
        gray: '#595959',
    },
    {
        primary: "'Roboto', sans-serif",
    }
);

const Presentation = () => {
    return (
        <Deck
            transition={['zoom', 'slide']}
            progress="number"
            showFullscreenControl={false}
            // controls={false}
            transitionDuration={500}
            theme={theme}
        >
            <SlideSet>
                <Slide1 />
                <Slide2 />
                <Slide3 />
                <Slide4 />
                <Slide5 />
                <Slide6 />
                <Slide7 />
                <Slide8 />
                <Slide9 />
            </SlideSet>
        </Deck>
    );
};

export default Presentation;
