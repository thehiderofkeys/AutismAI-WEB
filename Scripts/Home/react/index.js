import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => (
    <React.StrictMode>
        <Router>
            <div> React Routing Test </div>
            <div><Link to="/"> Index </Link></div>
            <div><Link to="/test"> Test </Link></div>
            <div> <Link to="/test2"> Test2 </Link> </div>
            <Switch>
                <Route path="/test">
                    <div>Test</div>
                </Route>
                <Route path="/test2">
                    <div>Test2</div>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>
);

render(<App />, document.getElementById('app'));