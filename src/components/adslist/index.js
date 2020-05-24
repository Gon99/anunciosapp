import { connect } from 'react-redux';

import AdsList from './adslist';
import { getVisibleAds } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
    return {
        ads: getVisibleAds(state, ownProps.tag)
    };
}

export default connect(mapStateToProps)(AdsList);