import React from 'react';
import { shallow } from 'enzyme';
import AdsList from './adslist';

describe('AdsList', () => {
    const props = {
        ads: [{ 
            _id: 1,
            name: 'advert',
            description: 'this is an advert',
            photo: '/public/favicon.ico',
            price: 200,
        }],
        history: "history"
    }
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AdsList {...props} />);
    });

    test('snapshot testing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('should render a List of ads', () => {
        expect(wrapper.find('List').props().items).toEqual(props.ads);
    });
})