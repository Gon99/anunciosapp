import React, { Component } from 'react';
import Header from '../header/header';
import List from '../List';

const goDetail = id => {
    this.props.history.push({
        pathname: '/detail',
        state: {id: id}
    })
}

const goEdit = id => {
    this.props.history.push({
        pathname: '/edit',
        state: {id: id}
    })
}

function AdsCard({ _id, name, photo, description, price}){
    return (
        <div className="topPadding" key={_id}>
            <h2>{name}</h2>
            <img src={photo}></img>
            <p>{description}</p>
            <p>{price}€</p>
            <button class="button" onClick={() => goDetail(_id)}>Detail</button>
            <button class="button" onClick={() => goEdit(_id)}>Edit</button>
        </div>
    )
}

export default function AdsList({ ads }) {
    return (
        <div>
            <Header/>
            <List
                items={ads}
                renderItem={ad => (
                    <AdsCard {...ad} />
                )}
            />
        </div>
    );
}
