import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGetTags, fetchCreateAd } from '../../store/actions';

function createAdRequest(event, state, dispatch){
    event.preventDefault();
    dispatch(fetchCreateAd(state));
}

export default function CreateAd(){
    const dispatch = useDispatch();
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
            <h1>Ad Creation</h1>
            <form onSubmit={e => createAdRequest(e, state, dispatch)}>
                <label>Name: </label>
                <input placeholder="Name" type="text" name="name" onChange={e => setState({...state, name: e.target.value})}></input>
                <br></br>
                <br></br>
                <label>Description: </label>
                <input placeholder="Description" type="text" name="description" onChange={e => setState({...state, description: e.target.value})}></input>
                <br></br>
                <br></br>
                <label>Tags: </label>
                <select onChange={e => setState({...state, tags: e.target.value})} name="tag">{tags.map((tag, y)=>
                    <option key={y}>{tag}</option>
                )}</select>
                <br></br>
                <br></br>
                <label>Type: </label>
                <select name="type" onChange={e => setState({...state, type: e.target.value})}>
                    <option key="buy">buy</option>
                    <option key="sell">sell</option>
                </select>
                <br></br>
                <br></br>
                <label>Price: </label>
                <input placeholder="Price €" type="text" pattern="[0-9]*" name="price" onChange={e => setState({...state, price: e.target.value})}></input>
                <br></br>
                <br></br>
                <label>Photo: </label>
                <input type="text" name="photo" placeholder="URL Image" onChange={e => setState({...state, photo: e.target.value})}/>
                <br></br>
                <br></br>
                <input type="submit" value="Create Ad"/>
            </form>
            <br></br>
            {/*<button className="button" onClick={this.goBack}>Back</button>*/}
        </div>
    )

    /*return (
        <div className="main topPadding">
            <h1>Ad Creation</h1>
            <form onSubmit={fetchCreateAd}>
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
    )*/
}

/*class CreateAd extends Component {
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

    render(){
        return (
            <CreateAdForm state={this.state}/>
        )
    }
}*/

//export default CreateAd;