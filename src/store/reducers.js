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