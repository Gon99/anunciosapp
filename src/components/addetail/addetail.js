import React, { Component } from 'react';
import api from '../api/api';

const { getAdDetail } = api();

class AdDetail extends Component {
    constructor(props){
        super();

        this.state = {
            id: props.location.state.id,
            item: []
        }
    }

    adDetail = async () => {
        const response = await getAdDetail(this.state.id);
        if (response){
            this.setState({
                item: response
            })
        }
    }

    componentDidMount() {
        this.adDetail();
    }

    goBack = () => {
        this.props.history.push('/ads');
    }

    render() {
        const item = this.state.item;
        let date = item.createdAt;
        if (date){
            date = date.substring(0, 10);
        }
        return (
            <div className="main topPadding">
                <h1>{item.name}</h1>
                <img src={item.photo}></img>
                <p>Fecha de publicación {date}</p>
                <h2>Descripción</h2>
                <p>{item.description}</p>
                <h2>Precio</h2>
                <p>{item.price}€</p>
                <button className="button" onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default AdDetail;