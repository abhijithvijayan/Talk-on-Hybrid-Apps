import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

import SlideId from './SlideId';

const Slide3 = props => {
    return (
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <SlideId slideId={props.slideId} />
            <Heading size={6} textColor="secondary" caps>
                Standard List
            </Heading>
            <List>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
            </List>
        </Slide>
    );
};

export default Slide3;
