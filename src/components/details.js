import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';
import NavBtn from './nav_btn';
import DeleteButton from './delete_button';

class Details extends Component {
    state = {
        item: {},
    }

    componentDidMount() {
        this.getToDoItem();
    }

    async getToDoItem() {
        const { itemId } = this.props.match.params;

        try {
            const response = await axios.get(`${config.API_URL}/todos/${itemId+config.API_KEY}`);
            const { todo } = response.data;
            let currentTimestamp = this.convertTime( parseInt(todo.created));

            this.setState({
                item: todo,
                timestamp: currentTimestamp
            });
        } catch (err) {
            this.setState({
                item: {}
            });
        }
    }

    convertTime(time) {
        const date = new Date(time).toDateString();
        return date;
    }

    deleteItem = async id => {
        // http://api.reactprototypes.com/todos?idkey=somekey
        const response = await axios.delete(`${config.API_URL}/todos/${id+config.API_KEY}`);
        console.log(response);
        
    }

    render() { 
        const { item, timestamp } = this.state;
        const { details } = item;
        if (!item) {
            return <h1>LOADING.....</h1>;
        }

        if (!item.title) {
            return (
                <div>
                    <h1 className="center">Item Details</h1>
                    <NavBtn to="/" color="purple darken-2" text="Back to List"/>
                    <h2 className="center">No Item to Display</h2>
                </div>
            )
        }
        return (
            <div>
                <h1 className="center">Item Details</h1>
                <NavBtn to="/" color="purple darken-2" text="Back to List"/>
                <h2 className="center">{ item.title }</h2>
                <h4 className="center"><u>Details</u></h4>
                <p className="center">{ details }</p>
                <p className="center">{ timestamp }</p>
                <div className="center">
                    <DeleteButton delete={ () => this.deleteItem(this.state.item._id)}/>
                </div>
            </div>
        )
    }
}

export default Details;