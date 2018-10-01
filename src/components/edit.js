import React, { Component } from 'react';
import config from '../config';
import axios from 'axios';

class EditItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTodo: null,
        }
    }

    componentDidMount() {
        this.getCurrentTodoItem();
    }

    async getCurrentTodoItem () {
        const { itemId } = this.props.match.params;
        console.log( itemId )

        const response = await axios.get(`${config.API_URL}/todos${itemId+config.API_KEY}`);

        console.log(response);
        
    }
    render() {
        console.log(this.props);
        return (
            <div className="center">
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default EditItem;