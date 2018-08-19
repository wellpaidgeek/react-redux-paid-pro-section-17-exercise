import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';
import styles from './search-results.css';

export default function SearchResults ({ results, searchResultClicked }) {
    return (
        <div className={styles.container}>
        { results.map((result) => <SearchResult result={result} onClick={() => searchResultClicked(result)} />) }
        </div>
    );
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(CustomTypes.SearchResult),
    searchResultClicked: PropTypes.func.isRequired,
};