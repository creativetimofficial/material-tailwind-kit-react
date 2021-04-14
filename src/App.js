import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

// Material Icons Style Sheet
import 'material-icons/css/material-icons.css';

// Material Tailwind Style Sheet
import '@material-tailwind/react/tailwind.css';

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route exact path="/pages/landing">
                <Landing />
            </Route>
            <Route exact path="/pages/profile">
                <Profile />
            </Route>
            <Route exact path="/pages/login">
                <Login />
            </Route>
            <Route exact path="/pages/register">
                <Register />
            </Route>
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
