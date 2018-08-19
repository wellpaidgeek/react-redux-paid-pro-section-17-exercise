import axios from 'axios';
import { put, call, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { PERFORM_SEARCH, searchSuccess, searchError } from '../actions/search';

const apiKey = '905ee2e802364f25829caca102b38b73';

const selectSearchState = (state) => state.search;

function* doSearch() {
    const { currentOffset, searchTerm } = yield select(selectSearchState);
    try {
        const searchResults = yield call(
            axios.get,
            'https://api.giphy.com/v1/gifs/search',
            {
                params: {
                    apiKey,
                    q: searchTerm,
                    limit: 50,
                    offset: currentOffset,
                },
            }
        );
        yield put(searchSuccess(searchResults.data.data));
    } catch (e) {
        yield put(searchError());
    }
}

export default function* () {
    yield takeLatest(PERFORM_SEARCH, doSearch);
}