﻿import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Frontpage from './Pages/Frontpage/index';
import DashboardPage from './Pages/DashboardPage/index';
import QuizPage from './Pages/QuizPage/index';
import AdminPage from "./Pages/AdminPage/index"
import ContributionsPage from "./Pages/ContributionsPage/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import paths from "./routes/paths";

const App = () => (
    <React.StrictMode>
        <Header />
        <Router>
            <Switch>
                <Route exact path={paths.FRONTPAGE} component={Frontpage} />
                <Route exact path={paths.DASHBOARD} component={DashboardPage} />
                <Route exact path={paths.QUIZ} component={QuizPage} />
                <Route exact path={paths.ADMIN} component={AdminPage} />
                <Route exact path={paths.CONTRIBUTIONS} component={ContributionsPage} />

            </Switch>
        </Router>
        <Footer/>
    </React.StrictMode>
);

render(<App />, document.getElementById('app'));