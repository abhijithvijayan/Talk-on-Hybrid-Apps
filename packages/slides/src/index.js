import React from 'react';
import ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import PropTypes from 'prop-types';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import './styles/main.scss';
import Presentation from './presentation';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/base/_variables.scss');

const CustomErrorReporter = ({ error }) => {
    return <Redbox error={error} />;
};

CustomErrorReporter.propTypes = {
    error: PropTypes.instanceOf(Error).isRequired,
};

ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
        <ThemeProvider theme={theme}>
            <Presentation />
        </ThemeProvider>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./presentation', () => {
        // eslint-disable-next-line global-require
        const NextPresentation = require('./presentation').default;

        ReactDOM.render(
            <AppContainer errorReporter={CustomErrorReporter}>
                <ThemeProvider theme={theme}>
                    <NextPresentation />
                </ThemeProvider>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
