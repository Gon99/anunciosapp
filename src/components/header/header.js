import React, { Component } from 'react';
import api from '../api/api';

const { getTags } = api();
const { filterAdByTag } = api();
const { filterAdByName } = api();

class Header extends Component{

    constructor(){
        super();

        this.state = {
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

    componentDidMount(){
        this.getTags();
    }
    
    handleDropdown = async (event) => {
        const tagSelected = event.target.value;
        
        const filteredAds = await filterAdByTag(tagSelected);
        this.setState({
            ads: filteredAds
        })
        
    }

    handleSearchSubmit = async (event) => {
        event.preventDefault();
        const filteredAdsByName = await filterAdByName(this.state.search);
        this.setState({
            ads: filteredAdsByName  
        })
    }

    handleSearch = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    goCreateAd = () => {
        this.props.history.push('/createad');
    }

    render(){
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
                {/*AdsList*/}
            </div>
        );
    }
}

export default Header;