export const getAds = state => state.advertisements;

export function getVisibleAds(state, filter){
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

    return visibleAds.map(ads => ({ ...ads}));
}