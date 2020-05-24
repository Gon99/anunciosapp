import { ADS_TAGS } from '../constants';

export const getAds = state => state.ads;

export function getVisibleAds(state, filter){
    const ads = getAds(state);
    let visibleAds = ads;
    if (filter !== ADS_TAGS.lifestyle) {
        visibleAds = ads.filter(ads => ads.tags === filter);
    }
    return visibleAds.map(ads => ({ ...ads}));
}