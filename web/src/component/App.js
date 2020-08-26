import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './Header';
import HomePage from './HomePage';
import BookList from './BookList';
import AddBooks from "./AddBooks";

function App() {
    return(
        <div>
        <Header />
        <Switch>
            <Route path="/" exact component={HomePage} />    
            <Route path="/api" exact component={HomePage} />
            <Route path="/api/books" exact component={BookList} />
            <Route path="/api/addBooks" exact component={AddBooks} />
        </Switch>
        </div>
    );
}

export default App;