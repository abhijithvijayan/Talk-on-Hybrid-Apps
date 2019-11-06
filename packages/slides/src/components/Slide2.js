import React from 'react';
import { Heading, Text, Slide, List, Appear, ListItem } from 'spectacle';

// https://github.com/FormidableLabs/spectacle/issues/678
const Slide2 = props => {
    return (
        <Slide transition={['fade']} bgColor="tertiary" {...props}>
            <Heading size={1} textColor="primary" caps>
                Contents
            </Heading>
            <List>
                <Appear>
                    <ListItem>Introduction</ListItem>
                </Appear>
                <Appear>
                    <ListItem>I</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Dont</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Know</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Yet</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Conclusion</ListItem>
                </Appear>
            </List>
        </Slide>
    );
};

export default Slide2;
