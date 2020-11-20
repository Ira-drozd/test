import React from 'react'
import 'materialize-css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import FormPage from "./pages/FormPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={FormPage}>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
