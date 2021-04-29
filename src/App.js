import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Material Tailwind Style Sheet
import '@material-tailwind/react/tailwind.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
