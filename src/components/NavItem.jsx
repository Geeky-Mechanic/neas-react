import React from 'react';

function NavItem (props){
    return (
    <li className="nav-item">
        <a id={props.id} className="nav-link nav-color" href={`${props.link}`}>{props.text}</a>
    </li>
    );
}

export default NavItem;