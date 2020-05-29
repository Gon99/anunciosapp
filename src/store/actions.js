import * as TYPES from './types';

import AdsService from '../services/Ads';
import api from '../components/api/api';

const { getAds, createAd, getTags, updateAd } = api();

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
            const ads = await getAds();
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

export const createAdSuccess = () => ({
    type: TYPES.CREATE_AD_SUCCESS,
})

export const fetchCreateAd = (data) => 
    async function (dispatch, getState, { history }) {
        dispatch(createAdRequest());
        try {
            await createAd(data.state);
            dispatch(createAdSuccess());
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

export const fetchEditAd = (data) =>
    async function (dispatch, getState, { history }) {
        dispatch(editAdRequest());
        try {
            await updateAd(data);
            dispatch(editAdSuccess());
            history.push('/ads');
        } catch (error) {
            dispatch(tagsFailure(error))
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
            const tags = await getTags();
            dispatch(tagsSuccess(tags));
            return tags;
        } catch (error) {
            dispatch(tagsFailure(error))
        }
    }