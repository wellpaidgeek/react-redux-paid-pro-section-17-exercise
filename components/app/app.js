import React from 'react';
import Navigation from '../navigation/navigation.container';
import styles from './app.css';
import GiphyDisplay from '../giphy-display/giphy-display';
import PropTypes from 'prop-types';
import { SearchResult } from '../../lib/custom-types';

const App = ({ children, giphyDisplayIsShown, giphyDisplayed, hideGiphyDisplay }) => (
    <div>
        <h1 className={styles.header}>Giphy Master</h1>
        <Navigation />
        {children}
        <GiphyDisplay isShown={giphyDisplayIsShown} onClick={hideGiphyDisplay} giphy={giphyDisplayed}/>
    </div>
);

App.propTypes = {
    giphyDisplayIsShown: PropTypes.bool.isRequired,
    giphyDisplayed: SearchResult,
    hideGiphyDisplay: PropTypes.func.isRequired,
};

export default App;