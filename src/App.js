import React from 'react';
import Header from "./Header";
import './App.css';
import SwipeCards from "./SwipeCards";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Switch>
                    <Route path="/chat">
                        <h1>Chat Page</h1>
                    </Route>
                    <Route path="/">
                        <SwipeCards/>
                    </Route>
                    <Route path="/weta">
                        <h1>Seriously, have any of you looked up what a Weta actually is?
                            Don't....</h1>
                    </Route>
                    <Route path="/wetapic">
                        <h1>Told you...</h1>
                        <img
                            className="weta__logo"
                            src="https://media.wired.com/photos/5932496b58b0d64bb35d0b45/master/pass/42-33047306.jpg"
                            alt="Weta Pic"/>
                    </Route>
                    <Route path="/">
                        <h1>Homepage</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;


//
{/*    Header */
}
//
//
//
{/*   Swipe Cards */
}
//
{/*Buttons below swipe cards */
}
//
//
{/*Chat screen*/
}
//
{/* Individual chat screen */
}