import React, {Component} from 'react';
import {BrowserRouter as RouterBox, Route, Switch} from 'react-router-dom';
import Index from './view/home/index';
import Me from './view/me/index';
class RouterConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <RouterBox>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/me" component={Me} />
                </Switch>
            </RouterBox>
        );
    }
}

export default RouterConfig;
