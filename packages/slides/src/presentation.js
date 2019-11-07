import React from 'react';
import { Deck, SlideSet, Slide } from 'spectacle';
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
import Slide10 from './presentation/Slide10';
import Slide11 from './presentation/Slide11';
import Slide12 from './presentation/Slide12';
import Slide13 from './presentation/Slide13';
import Slide14 from './presentation/Slide14';
import Slide15 from './presentation/Slide15';

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
                <Slide10 />
                <Slide11 />
                <Slide12 />
                <Slide13 />
                <Slide14 />
                <Slide15 />
            </SlideSet>
        </Deck>
    );
};

export default Presentation;
