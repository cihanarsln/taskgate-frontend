import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import NavigationBar from './NavigationBar';
import Dashboard from './tasks/Dashboard';
import Tasks from './tasks/Tasks';
import Members from './tasks/Members';

const App = () => {
    return(
        <div>
            <Router history={history}>
                <NavigationBar />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/tasks" exact component={Tasks} />
                    <Route path="/members" exact component={Members} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;