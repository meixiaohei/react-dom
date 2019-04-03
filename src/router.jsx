import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Index from './view/home/index';
import Me from './view/me/index';
class RouterConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/me" component={Me} />
                </Switch>
            </HashRouter>
        );
    }
}

export default RouterConfig;
