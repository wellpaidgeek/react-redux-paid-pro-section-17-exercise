import React from 'react';
import PropTypes from 'prop-types';
import styles from './search-form.css';

export default function SearchForm ({ onSearchSubmitted }) {
    let searchField = null;
    const searchSubmitted = (e) => {
        e.preventDefault();
        onSearchSubmitted(searchField.value);
    }
    return (
        <form className={styles.container} onSubmit={searchSubmitted}>
            <input className={styles.searchField} ref={(e) => searchField = e} type="text" placeholder="Find me Giphys..." />
            <input className={styles.button} type="submit" value="Search" />
        </form>
    )
}

SearchForm.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
};