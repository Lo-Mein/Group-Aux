import React, { Component } from 'react';
import RoomJoin from "./RoomJoin";
import CreateRoom from "./CreateRoom";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
 } from "react-router-dom";


const HomePage = (props) =>{

    return (
    <Router>
        <Switch>
            <Route exact path='/'><p>This is the home page</p></Route>
            <Route path='/join' component={RoomJoin} />
            <Route path='/create' component={CreateRoom} />
        </Switch>
    </Router>
    );
}
export default HomePage;