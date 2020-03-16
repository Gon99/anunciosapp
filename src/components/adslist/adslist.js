import React, { Component } from 'react';
import api from '../api/api';

const { getAds } = api();

const getAdsRequest = () => {
    
    const response = getAds();
    console.log("response de getAds: ",response);
    if (response){
        console.log("bien ads if");
    }else{
        console.log("error ads else");
        
    }
}

class AdsList extends Component{
    constructor(){
        super();
    }

    render(){
        getAdsRequest();
        return (
            <div>

            </div>
        );
    }
}

export default AdsList;