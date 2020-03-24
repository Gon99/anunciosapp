import React, {Component} from 'react';
import api from '../api/api';

const { createAd, getTags } = api();

class CreateAd extends Component {
    constructor(props){
        super();

        this.state ={
            tags: [],
            name: '',
            description: '',
            tag: 'lifestyle',
            type: 'buy',
            price: '',
            photo: ''
        }
    }

    getTags = async () => {
        const tags = await getTags();
        if (tags){
            for (let index = 0; index < tags.length; index++) {
                if (tags[index]){
                    let tagsArrClone = this.state.tags.slice();
                    tagsArrClone[index] = tags[index];
                    this.setState({
                        tags: tagsArrClone
                    })
                }   
            }
        }
    }

    goBack = () => {
        this.props.history.push('/ads');
    }

    componentDidMount(){
        this.getTags();
    }

    handleCreation = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    createAd = async (event) => {
        event.preventDefault();
        const response = await createAd(this.state);
    }

    render(){
        return (
            <div className="main topPadding">
                <h1>Ad Creation</h1>
                <form onSubmit={this.createAd}>
                    <label>Name: </label>
                    <input placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.handleCreation}></input>
                    <br></br>
                    <br></br>
                    <label>Description: </label>
                    <input placeholder="Description" type="text" name="description" value={this.state.description} onChange={this.handleCreation}></input>
                    <br></br>
                    <br></br>
                    <label>Tags: </label>
                    <select name="tag" onChange={this.handleCreation}>{this.state.tags.map((tag, y)=>
                        <option key={y}>{tag}</option>
                    )}</select>
                    <br></br>
                    <br></br>
                    <label>Type: </label>
                    <select name="type" onChange={this.handleCreation}>
                        <option key="buy">buy</option>
                        <option key="sell">sell</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label>Price: </label>
                    <input placeholder="Price €" type="text" pattern="[0-9]*" name="price" value={this.state.price} onChange={this.handleCreation}></input>
                    <br></br>
                    <br></br>
                    <label>Photo: </label>
                    <input type="text" name="photo" placeholder="URL Image" onChange={this.handleCreation}/>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Create Ad"/>
                </form>
                <br></br>
                <button className="button" onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default CreateAd;