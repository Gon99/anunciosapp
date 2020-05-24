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
        const tagsResponse = await getTags();
        console.log("tags:", tagsResponse);
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
                <div className="topPadding" key={result._id}>
                    <h2>{result.name}</h2>
                    <img src={result.photo}></img>
                    <p>{result.description}</p>
                    <p>{result.price}€</p>
                    <button class="button" onClick={() => this.goDetail(result._id)}>Detail</button>
                    <button class="button" onClick={() => this.goEdit(result._id)}>Edit</button>
                </div>
            );
        });
        return (
            <div className="main">
                <h1>Filters</h1>
                <p className="tags">Filter Ads by Tag:</p>
                <select className="tags" onChange={this.handleDropdown}>{this.state.tags.map((tag, y) =>
                <option key={y}>{tag}</option>)}</select>
                <form className="searchS" onSubmit={this.handleSearchSubmit}>
                    <div>
                        <input type="text" placeholder="Search" name="search" value={this.state.search} onChange={this.handleSearch}></input>
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
                <br></br>
                <h1>Create your ad</h1>
                <button onClick={this.goCreateAd}>Create Ad</button>
                <h1>All Ads</h1>
                {AdsList}
            </div>
        );
    }
}

export default AdsList;