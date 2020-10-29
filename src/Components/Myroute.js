import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';

class Myroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Page1" component={Page1} />
                    <Route exact path="/Page2" component={Page2} />
                    <Route exact path="/Page3/:username" component={Page3} />
                    <Route component={Notfound}></Route>
                </Switch>
            </div>
        );
    }
}

export default Myroute;