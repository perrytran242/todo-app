import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddItem from './add_item';
import List from './list';
import Details from './details';
import NotFound from './not_found';


class App extends Component {
   // Took out state of the App component because we no longer need life cycle methods and state.
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" component ={ List }/>
                    <Route path="/add-item" component = { AddItem }/>
                    <Route path="/item/:itemId" component={ Details }/>
                    <Route component={ NotFound }/>
                </Switch>
            </div>
            );
        }
    }
export default App;
