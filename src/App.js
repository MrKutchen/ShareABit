import React from 'react';
import Header from "./Header";
import './App.css';
import SwipeCards from "./SwipeCards";
import SwipeButtons from "./SwipeButtons";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/chat">
                        <Header backButton="/" />
                        <h1>Chat Page</h1>
                    </Route>
                    <Route path="/">
                        <Header />
                        <SwipeCards/>
                        <SwipeButtons/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
