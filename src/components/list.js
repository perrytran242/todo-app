import React, { Component } from 'react';
import NavBtn from './nav_btn';
import Item from './item';
import config from'../config';
import axios from 'axios';

class List extends Component {
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
            const response = await axios.get(`${config.API_URL}/todos${config.API_KEY}`);
            const { todos } = response.data;
            this.setState({
                list: todos,
            });
        } catch(err) {
            this.setState({
                error: 'Error retrieving list data',
            });
        }
    }

    deleteItem = async id => {
        // http://api.reactprototypes.com/todos?idkey=somekey
        await axios.delete(`${config.API_URL}/todos/${id+config.API_KEY}`);
        this.getListData();
    }

    render() {
        const { error, list } = this.state;

        const listElements = list.map( (item, index) => {
            return <Item key={item._id} item={item} delete={() => this.deleteItem(item._id)}/>
        });  

        return (
            <div>
                <h1 className="center"> To Do List</h1>
                <NavBtn to="/add-item" color="green dark-2" text="Add Item"/>
                <p className="red-text text-darken-2">{ error }</p>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
    
         );
    }
}
export default List;
