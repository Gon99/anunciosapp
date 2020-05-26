import { ADS_TAGS } from '../constants';

export const getAds = state => state.advertisements;

export function getVisibleAds(state, filter){
    const allAds = getAds(state);
    return allAds.map(ads => ({...ads}));
    /*const ads = getAds(state);
    let visibleAds = ads;
    if (filter !== ADS_TAGS.lifestyle) {
        visibleAds = ads.filter(ads => ads.tags === filter);
    }
    console.log("visibleAds para retornar", visibleAds);
    visibleAds.map(ads => console.log("visibleAds del map", ads));
    return visibleAds.map(ads => ({ ...ads}));*/
}