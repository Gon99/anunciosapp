import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import * as TYPES from './types';

import api from '../components/api/api';

jest.mock('../components/api/api');

const history = {
    push: jest.fn(),
}

const middlewares = [thunk.withExtraArgument({ api, history})];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('actions', () => {
    describe('fetchAds', () => {
        it('should dispatch FETCH_ADS_REQUEST and FETCH_ADS_SUCCESS actions',async () => {
            const dispatch = jest.fn();
            const action = actions
            const getState = () => {};
            const api = () => ({
                getAds,
            });
            const ads = [];
            api.getAds.mockResolvedValue(ads);

            await action(dispatch, getState, { api });

            expect(dispatch).toHaveBeenNthCalledWith(1, {
                type: TYPES.FETCH_ADS_REQUEST
            });

            expect(api.getAds).toHaveBeenCalled();

            expect(dispatch).toHaveBeenNthCalledWith(2, {
                type: TYPES.FETCH_ADS_SUCCESS,
                ads
            });
        });
    });
})