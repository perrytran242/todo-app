import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default props => {
    return (
        <div>
            <Link to="/" onClick={props.delete} className="btn red darken-2">Delete</Link>
        </div>
    )
}   