import { connect } from 'react-redux';
import SearchResults from './search-results';
import { showGiphyDisplay } from '../../actions/giphy-display';

function mapStateToProps (state) {
    return {
        results: state.search.results,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        searchResultClicked: (giphy) => dispatch(showGiphyDisplay(giphy)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);