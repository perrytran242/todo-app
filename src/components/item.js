import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <li className="collection-item row">
            <div className="col s8">
                <Link to={`/item/${props.item._id}`}>
                    {props.item.title}
                </Link>
                
            </div>
            <div className="col-4 right-align">
                <button onClick={props.delete}className="btn red darken-2">Delete</button>
            </div>
        </li>
    );
}
