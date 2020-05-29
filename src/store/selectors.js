import { ADS_TAGS } from '../constants';

export const getAds = state => state.advertisements;

export function getVisibleAds(state, filter){
    /*const allAds = getAds(state);
    return allAds.map(ads => ({...ads}));*/
    const ads = getAds(state);
    let visibleAds = [];
    if (filter === "all"){
        return ads;
    }
    ads.map(ad => {
        if (ad.tags){
            if (ad.tags.includes(filter)){
                visibleAds.push(ad)
            }
        }
    });
    console.log("los visible ads", visibleAds);
    /*if (filter !== ADS_TAGS.all) {
        visibleAds = ads.filter(ads => ads.tags[0] === filter);
    }
    console.log("visibleAds para retornar", visibleAds);
    visibleAds.map(ads => console.log("visibleAds del map", ads));*/
    return visibleAds.map(ads => ({ ...ads}));
}