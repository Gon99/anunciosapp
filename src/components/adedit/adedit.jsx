import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEditAd, fetchGetTags } from '../../store/actions';
import { useLocation } from "react-router-dom";

function editAdRequest(event, data, dispatch, id) {
    event.preventDefault();
    dispatch(fetchEditAd(id,data));
}

export default function AdEdit() {
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.state.id;
    const [state, setState] = useState({
        name: "",
        description: "",
        tag: "lifestyle",
        type: "buy",
        price: "",
        photo: ""
    });
    
    const [tags, setTags] = useState([]);
    useEffect(() => {
        const tagsPromise = dispatch(fetchGetTags());
        tagsPromise.then(tags => {
            const filteredTags = tags.filter((el) => el != null);
            setTags(filteredTags);
        })
    }, [dispatch])

    return (
        <div className="main topPadding">
            <h1>Edit Advertisement</h1>
            <form onSubmit={(e) => editAdRequest(e, state, dispatch, id)}>
                <label>New name </label>
                <input placeholder="Ad name" type="text" name="name" onChange={(e) => setState({...state, name: e.target.value})}/>
                <br></br>
                <br></br>
                <label>New Photo </label>
                <input type="text" name="photo" placeholder="URL Image" onChange={(e) => setState({...state, photo: e.target.value})}/>
                <br></br>
                <br></br>
                <label>New description </label>
                <input placeholder="Description" name="description" onChange={(e) => setState({...state, description: e.target.value})}></input>
                <br></br>
                <br></br>
                <label>New tag </label>
                <select name="tag" onChange={e => setState({...state, tag: e.target.value})}>{tags.map((tag, y)=>
                    <option key={y}>{tag}</option>
                )}</select>
                <br></br>
                <br></br>
                <label>New type </label>
                <select name="type" onChange={e => setState({...state, type: e.target.value})}>
                    <option key="buy">buy</option>
                    <option key="sell">sell</option>
                </select>
                <br></br>
                <br></br>
                <label>New price</label>
                <input placeholder="Price" type="text" name="price" pattern="[0-9]*" onChange={e => setState({...state, price:e.target.value})}></input>
                <br></br>
                <br></br>
                {/*<button onClick={this.goBack}>Back</button>*/}
            <input type="submit" value="Edit"/>
            </form>
        </div>
    )
}

/*class AdEdit extends Component {
    constructor(props){
        super();

        this.handleUserInput = this.handleUserInput.bind(this);
        this.editAd = this.editAd.bind(this);
        this.state = {
            id: props.location.state.id,
            name: '',
            photo: '',
            description: '',
            price: '',
            tag: '',
            tags: [],
            type: ''
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

    componentDidMount(){
        this.getTags();
    }

    render() {
        return (
            <div className="main topPadding">
                <h1>Edit Advertisement</h1>
                <form onSubmit={this.editAd}>
                    <label>New name </label>
                    <input placeholder="Ad name" type="text" name="name" value={this.state.name} onChange={this.handleUserInput}/>
                    <br></br>
                    <br></br>
                    <label>New Photo </label>
                    <input type="text" name="photo" placeholder="URL Image" onChange={this.handleUserInput}/>
                    <br></br>
                    <br></br>
                    <label>New description </label>
                    <input placeholder="Description" name="description" value={this.state.description} onChange={this.handleUserInput}></input>
                    <br></br>
                    <br></br>
                    <label>New tag </label>
                    <select name="tag" onChange={this.handleUserInput}>{this.state.tags.map((tag, y)=>
                        <option key={y}>{tag}</option>
                    )}</select>
                    <br></br>
                    <br></br>
                    <label>New type </label>
                    <select name="type" onChange={this.handleUserInput}>
                        <option key="buy">buy</option>
                        <option key="sell">sell</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label>New price</label>
                    <input placeholder="Price" type="text" name="price" pattern="[0-9]*" value={this.state.price} onChange={this.handleUserInput}></input>
                    <br></br>
                    <br></br>
                    <button onClick={this.goBack}>Back</button>
                <input type="submit" value="Edit"/>
                </form>
            </div>
        )
    }
}

export default AdEdit;*/