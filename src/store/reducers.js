import * as TYPES from './types';

const initialState = {
    ads: [],
    ui: {
        isFetching: false,
        error: null
    }
}

export function advertisements(state = initialState.ads, action) {
    switch(action.type) {
        case TYPES.FETCH_ADS_SUCCESS:
            return action.ads;
        case TYPES.CREATE_AD_SUCCESS:
            return state
        default:
            return state;
    }
}