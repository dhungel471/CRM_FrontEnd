import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(props) {
    const navActiveColor = {color : "blue"};
    return(
        <nav>
            <NavLink active={navActiveColor} exact to="/api">
                Home Page
            </NavLink> {"| "}
            <NavLink active={navActiveColor} to="/api/books">
                List of Books
            </NavLink> {"| "}
            <NavLink active={navActiveColor} to="/api/addBooks">
                Add Books
            </NavLink>
        </nav>
    );
}

export default Header;