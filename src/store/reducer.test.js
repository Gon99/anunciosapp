import * as reducers from './reducers';
import * as TYPES from './types';

describe('reducers tests', () => {
    describe('ads', () => {
        test('Fetch Ads action', () => {
            const initialState = [];
            const ads = [{
                name: 'anuncio',
                description: 'esto es un anuncio',
                photo: '/images/advert.jpg',
                price: 200,
                tag: 'lifestyle',
                type: 'sell'
            }]
            const action = {
                type: TYPES.FETCH_ADS_SUCCESS,
                ads
            };
            const expectedState = ads;
            expect(reducers.advertisements(initialState, action)).toEqual(expectedState);
        });
    });
});