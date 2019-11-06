import React from 'react';
import styled from 'styled-components';
import { Heading } from 'spectacle';

const StyledHeader = styled(Heading)`
    font-size: 4rem !important;
    margin-bottom: 3rem !important;
    text-align: left;
`;

const HeaderText = ({ text }) => {
    return (
        <StyledHeader textColor="secondary" caps>
            {text}
        </StyledHeader>
    );
};

export default HeaderText;
