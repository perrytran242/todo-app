import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import AddItem from './add_item';
import List from './list';
import dummyListData from '../dummy_data/list_data';

class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        this.getListData();
    }

    getListData() {
        //Call server to get data

        this.setState({
            list: dummyListData
        });
    }

    addItem = (item) => {
        item._id = new Date().getTime();

        this.setState({
            list: [item, ...this.state.list]
        });
    }
// the data prop is passing this.state.list into the List functional component and being looped through to be rendered to the dom.
    render() {
        const { list } = this.state;
        return (
            <div className="container">
                <h1 className="center">To Do App</h1>
                <AddItem add={this.addItem}/>
                <List data = {list} />
            </div>
            );
        }
    }

export default App;
