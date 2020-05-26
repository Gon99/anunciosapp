import { connect } from 'react-redux';

import AdsList from './adslist';

import { fetchAds } from '../../store/actions';
import { getVisibleAds } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
    console.log("ownProps", ownProps);
    console.log("ownProps.tag", ownProps.tag);
    return {
        ads: getVisibleAds(state, ownProps.tag)
    };
}

export default connect(mapStateToProps)(AdsList);
