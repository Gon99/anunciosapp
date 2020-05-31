import * as TYPES from './types';

const initialState = {
    ads: [],
    username: "",
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
            return action.createdAd;
        case TYPES.EDIT_AD_SUCCESS:
            return action.editedAd;
        default:
            return state;
    }
}

export function login(state = initialState.username, action){
    switch(action.type){
        case TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                state: action.username
            }
        default:
            return state;
    }
}