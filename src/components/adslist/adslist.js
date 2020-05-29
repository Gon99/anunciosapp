import React, { Component } from 'react';
import AdsHeader from '../AdsHeader';
import List from '../List';
import { ADS_TAGS } from '../../constants';

function AdsCard({ _id, name, photo, description, price, history}){
    return (
        <div className="topPadding" key={_id}>
            <h2>{name}</h2>
            <img src={photo}></img>
            <p>{description}</p>
            <p>{price}€</p>
            <button class="button" onClick={() => history.push({
                pathname: '/detail',
                state: {id: _id}
            })}>Detail</button>
            <button class="button" onClick={() => history.push({
                pathname: "/edit",
                state: {id: _id}
            })}>Edit</button>
        </div>
    )
}

export default function AdsList({ 
    ads, history, match: { params } 
}) {
    return (
        <div>
            <AdsHeader filter={params.filter || ADS_TAGS.all}/>
            <List
                items={ads}
                renderItem={ad => (
                    <AdsCard {...ad} history={history} />
                )}
            />
        </div>
    );
}
