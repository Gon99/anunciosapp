import * as TYPES from './types';

import AdsService from '../services/Ads';
import api from '../components/api/api';

//const { getAds, createAd, getTags, updateAd, loginUser} = api();

export const fetchAdsRequest = () => ({
    type: TYPES.FETCH_ADS_REQUEST
});

export const fetchAdsFailure = error => ({
    type: TYPES.FETCH_ADS_FAILURE,
    error
});

export const fetchAdsSuccess = ads => ({
    type: TYPES.FETCH_ADS_SUCCESS,
    ads
})

export const fetchAds = () => 
    async function (dispatch, getState) {
        dispatch(fetchAdsRequest());
        try {
            const ads = await api().getAds();
            dispatch(fetchAdsSuccess(ads));
        } catch (error) {
            dispatch(fetchAdsFailure(error));
        }
    };

export const createAdRequest = () => ({
    type: TYPES.CREATE_AD_REQUEST
});

export const createAdFailure = error => ({
    type: TYPES.CREATE_AD_FAILURE,
    error
});

export const createAdSuccess = createdAd => ({
    type: TYPES.CREATE_AD_SUCCESS,
    createdAd
})

export const fetchCreateAd = (data) => 
    async function (dispatch, getState, { history }) {
        dispatch(createAdRequest());
        try {
            await api().createAd(data);
            dispatch(createAdSuccess(data.state));
            history.push('/ads');
        } catch (error) {
            dispatch(createAdFailure(error));
        }
    };

export const editAdRequest = () => ({
    type: TYPES.EDIT_AD_REQUEST
});

export const editAdFailure = error => ({
    type: TYPES.EDIT_AD_FAILURE,
    error
});

export const editAdSuccess = () => ({
    type: TYPES.EDIT_AD_SUCCESS,
})    

export const fetchEditAd = (id, data) =>
    async function (dispatch, getState, { history }) {
        dispatch(editAdRequest());
        try {
            console.log("data que llega", data);
            const response = await api().updateAd(id,data);
            console.log("la respuesta edicion", response);
            dispatch(editAdSuccess());
            history.push('/ads');
        } catch (error) {
            dispatch(tagsFailure(error))
        }
    }

export const loginUserRequest = () => ({
    type: TYPES.LOGIN_REQUEST
});

export const loginUserFailure = error => ({
    type: TYPES.LOGIN_FAILURE,
    error
});

export const loginUserSuccess = username => ({
    type: TYPES.LOGIN_SUCCESS,
    username
})    

export const fetchLoginUser = data =>
    async function (dispatch, getState, { history }) {
        dispatch(loginUserRequest());
        try {
            await api().loginUser(data);
            dispatch(loginUserSuccess(data.username));
            history.push('/ads');
        } catch (error) {
            dispatch(loginUserFailure(error));
        }
    }

export const tagsRequest = () => ({
    type: TYPES.TAGS_REQUEST
});

export const tagsFailure = error => ({
    type: TYPES.TAGS_FAILURE,
    error
});

export const tagsSuccess = (tags) => ({
    type: TYPES.TAGS_SUCCESS,
    tags
})    

export const fetchGetTags = () =>
    async function (dispatch, getState) {
        dispatch(tagsRequest());
        try {
            const tags = await api().getTags();
            dispatch(tagsSuccess(tags));
            return tags;
        } catch (error) {
            dispatch(tagsFailure(error))
        }
    }