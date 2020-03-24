import React, { Component } from 'react';
import api from '../api/api';
//import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap/Navbar'

const { getAds } = api();
const { getTags } = api();
const { filterAdByTag } = api();
const { filterAdByName } = api();

class AdsList extends Component{
    constructor(){
        super();

        this.state = {
            ads: [],
            tags: [],
            search: ''
        }
    }

    getTags = async () => {
        const tagsPromise = getTags();
        const tagsResponse = await tagsPromise;
        if (tagsResponse){
            for (let index = 0; index < tagsResponse.length; index++) {
                if (tagsResponse[index]){
                    let tagsArrClone = this.state.tags.slice();
                    tagsArrClone[index] = tagsResponse[index];
                    this.setState({
                        tags: tagsArrClone
                    })
                }
            }
        }
    }

    getAds = async () => {
        const adsPromise = getAds();
        if (adsPromise){
            const adsResponse = await adsPromise;
            this.setState({
                ads: adsResponse
            })
        }else{
            console.log("error ads else");
        }
    }

    goDetail = id => {
        this.props.history.push({
            pathname: '/detail',
            state: {id: id}
        })
    }

    goEdit = id => {
        this.props.history.push({
            pathname: '/edit',
            state: {id: id}
        })
    }

    componentDidMount(){
        this.getAds();
        this.getTags();
    }

    handleDropdown = async (event) => {
        const tagSelected = event.target.value;
        
        const filteredAds = await filterAdByTag(tagSelected);
        this.setState({
            ads: filteredAds
        })
        
    }

    handleSearch = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSearchSubmit = async (event) => {
        event.preventDefault();
        const filteredAdsByName = await filterAdByName(this.state.search);
        this.setState({
            ads: filteredAdsByName  
        })
    }

    goCreateAd = () => {
        this.props.history.push('/createad');
    }

    render(){
        const allAds = this.state.ads;
        const AdsList = allAds.map((result) => {
            return (
                <div key={result._id}>
                    <h1>{result.name}</h1>
                    <img src={result.photo}></img>
                    <p>{result.description}</p>
                    <p>{result.price}€</p>
                    <button onClick={() => this.goDetail(result._id)}>Detail</button>
                    <button onClick={() => this.goEdit(result._id)}>Edit</button>
                </div>
            );
        });
        return (
            <div>
                <p>Filter Ads by Tag:</p>
                <select onChange={this.handleDropdown}>{this.state.tags.map((tag, y) =>
                <option key={y}>{tag}</option>)}</select>
                <form onSubmit={this.handleSearchSubmit}>
                    <div>
                        <input type="text" placeholder="Search" name="search" value={this.state.search} onChange={this.handleSearch}></input>
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
                <button onClick={this.goCreateAd}>Create Ad</button>
                {AdsList}
            </div>
        );
    }
}

export default AdsList;