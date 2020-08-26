import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Frontpage from './Pages/Frontpage/index';
import DashboardPage from './Pages/DashboardPage/index';
import QuizPage from './Pages/QuizPage/index';
import AdminPage from "./Pages/AdminPage/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import paths from "./routes/paths";

const App = () => (
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path={paths.FRONTPAGE} component={Frontpage} />
                <Route exact path={paths.DASHBOARD} component={DashboardPage} />
                <Route exact path={paths.QUIZ} component={QuizPage} />
                <Route exact path={paths.ADMIN} component={AdminPage} />
            </Switch>
        </Router>
    </React.StrictMode>
);

render(<App />, document.getElementById('app'));