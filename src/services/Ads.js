import api from '../components/api/api';

const { getAds } = api();
/*const { getTags } = api();
const { filterAdByTag } = api();
const { filterAdByName } = api();*/
const getAdsRequest = async () => {
    const ads = await getAds();
    return new Promise((resolve, reject) => {
        if (!ads){
            reject(new Error("Network Error"))
        }
        resolve()
    })
}
/*const resolvedPromise = Promise.resolve(getAdsRequest());
resolvedPromise.then((ads) => {
    return { result: ads}
})*/
export default {
    getAllAds: getAdsRequest()
}