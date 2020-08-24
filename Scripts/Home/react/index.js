import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Frontpage from './Pages/Frontpage/index';
import DashboardPage from './Pages/DashboardPage/index';
import QuizPage from './Pages/QuizPage/index';
import AdminPage from "./Pages/AdminPage/index"

const App = () => (
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/" component={Frontpage} />
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/quiz" component={QuizPage} />
                <Route exact path="/admin" component={AdminPage} />
            </Switch>
        </Router>
    </React.StrictMode>
);

render(<App />, document.getElementById('app'));