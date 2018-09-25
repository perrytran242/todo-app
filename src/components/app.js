import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import AddItem from './add_item';
import List from './list';
import { Route } from 'react-router-dom';

class App extends Component {
   // Took out state of the App component because we no longer need life cycle methods and state.
    render() {
        return (
            <div className="container">
                <Route exact path="/" component ={ List }/>
                <Route path="/add-item" component = {AddItem}/>

            </div>
            );
        }
    }
export default App;
