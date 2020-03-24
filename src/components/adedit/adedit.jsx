import React, { Component } from 'react';
import api from '../api/api';

const { updateAd } = api();

class AdEdit extends Component {
    constructor(props){
        super();

        this.handleUserInput = this.handleUserInput.bind(this);
        this.editAd = this.editAd.bind(this);
        this.state = {
            id: props.location.state.id,
            name: '',
            photo: '',
            description: '',
            price: ''
        }
    }

    editAd = async (event) => {
        event.preventDefault();
        await updateAd(this.state.id, this.state);
        this.goBack();
    }

    handleUserInput = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        })
    }

    goBack = () => {
        this.props.history.push("/ads");
    }

    render() {
        return (
            <div>
                <h1>Edit Advertisement</h1>
                <form onSubmit={this.editAd}>
                    <label>New name</label>
                    <input placeholder="Ad name" type="text" name="name" value={this.state.name} onChange={this.handleUserInput}/>
                    <br></br>
                    <label>New Photo</label>
                    <input type="file" ref="upload" name="photo" accept="image/*" onChange={(event) => {this.handleUserInput(event)}} onClick={(event)=>{ event.target.value = null}}/>
                    <br></br>
                    <label>New description</label>
                    <input placeholder="Description" name="description" value={this.state.description} onChange={this.handleUserInput}></input>
                    <br></br>
                    <label>New price</label>
                    <input placeholder="Price" type="text" name="price" pattern="[0-9]*" value={this.state.price} onChange={this.handleUserInput}></input>
                    <br></br>
                    <button onClick={this.goBack}>Back</button>
                <input type="submit" value="Edit"/>
                </form>
            </div>
        )
    }
}

export default AdEdit;