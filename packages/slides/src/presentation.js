import React, { Component } from 'react';
import { Deck } from 'spectacle';
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

class Presentation extends Component {
    render() {
        return (
            <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
                <Slide1 bgColor="black" />
                <Slide2 />
                <Slide3 />
                <Slide4 />
            </Deck>
        );
    }
}

export default Presentation;
