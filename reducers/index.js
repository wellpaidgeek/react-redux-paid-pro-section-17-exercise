import { combineReducers } from 'redux';
import searchReducer from './search';
import { routerReducer } from 'react-router-redux';
import giphyDisplayReducer from './giphy-display';

export default combineReducers({
    router: routerReducer,
    search: searchReducer,
    giphyDisplay: giphyDisplayReducer,
});
