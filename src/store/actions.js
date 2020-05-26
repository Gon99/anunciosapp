import * as TYPES from './types';

import AdsService from '../services/Ads';
import api from '../components/api/api';

const { getAds } = api();

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