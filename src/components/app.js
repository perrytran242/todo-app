import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import AddItem from './add_item';
import axios from 'axios';
import List from './list';
import dummyListData from '../dummy_data/list_data';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c718_perrytran';

class App extends Component {
    state = {
        list: [],
        error: '',
    }

    componentDidMount() {
        this.getListData();
    }

    getListData = async () =>{
        //Call server to get data
        //reponse builds a URL that looks like - http://api.reactprototypes.com/todos?key=somekey
        // if there is a promise, resolve it by using .then
        // const response = axios.get(`${BASE_URL}/todos${API_KEY}`).then( (response) => {
        //     const { todos } = response.data
        //     console.log('Todos:', todos)
        //     this.setState({
        //         list: todos
        //     });
        // });
        try {
            const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);
            const { todos } = response.data;
            this.setState({
                list: todos,
            });
        } catch(err) {
            this.setState({
                error: 'Error retrieving list data',
            })
        }
    }

    addItem = async (item) => {
        // adding items to server, 2nd parameter is the item being added.
        // async should be added before the function.
        // use async or .then for promises.
        // use async and then await in the response.
        const response = await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
        console.log(response.data.todos)
        this.getListData();
        // axios.post(`${BASE_URL}/todos${API_KEY}`, item).then( (response) => {
        //     console.log('Add Item Response:', response);

        //     this.getListData();
        // }).catch( (err) => {
        //     console.log('Get List Data Error:', err.message);
        //     this.setState({
        //         error: 'Error retrieving list data',
        //     })
        // });
    }
    // create a copy of the list array. delete the item we don't want and update state to new list.
    deleteItem = async id => {
        console.log('Delete Item ID:', id);
        // http://api.reactprototypes.com/todos?idkey=somekey
        await axios.delete(`${BASE_URL}/todos/${id+API_KEY}`);

        this.getListData();
    }
// the data prop is passing this.state.list into the List functional component and being looped through to be rendered to the dom.
    render() {
        const { list, error } = this.state;
        console.log('List:', list);
        return (
            <div className="container">
                <h1 className="center">To Do App</h1>
                <AddItem add={this.addItem}/>
                <p className="red-text center">{error}</p>
                <List data = {list} delete={this.deleteItem}/>
            </div>
            );
        }
    }

export default App;
