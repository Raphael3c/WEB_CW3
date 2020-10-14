import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewCarona from './pages/NewCarona';
import Offer from './pages/Profile/Offer';
import Request from './pages/Profile/Request';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={Profile}></Route>

                <Route path="/caronas/new" component={NewCarona}></Route>

                <Route path="/offer" component={Offer}></Route>
                <Route path="/request" component={Request}></Route>
            </Switch>
        </BrowserRouter>
    );
}