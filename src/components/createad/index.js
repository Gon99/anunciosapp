import { connect } from 'react-redux';

import CreateAd from './createad';

import { fetchCreateAd } from '../../store/actions';

function mapStateToProps(state, ownProps) {
    return {
        state
    }
}

const mapDispatchToProps = {
    fetchCreateAd,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);

