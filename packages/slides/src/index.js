import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';

import Presentation from './presentation';

const CustomErrorReporter = ({ error }) => {
    return <Redbox error={error} />;
};

CustomErrorReporter.propTypes = {
    error: PropTypes.instanceOf(Error).isRequired,
};

ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
        <Presentation />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./presentation', () => {
        // eslint-disable-next-line global-require
        const NextPresentation = require('./presentation').default;

        ReactDOM.render(
            <AppContainer errorReporter={CustomErrorReporter}>
                <NextPresentation />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
