import * as selectors from './selectors';

describe('selector tests', () => {
    test('get ads using filters', () => {
        const filter = "lifestyle";
        const state = {
            advertisements: [{
                name: 'anuncio',
                description: 'esto es un anuncio',
                photo: '/images/advert.jpg',
                price: 200,
                tags: ['lifestyle', 'motor'],
                type: 'sell'
            }]
        }
        const expectedState = state.advertisements;
        expect(selectors.getVisibleAds(state, filter)).toEqual(expectedState);
    });
});