import React, {Component} from 'react';
import {BrowserRouter as RouterBox, Route, Switch} from 'react-router-dom';
import Index from './view/home/index';
import My from './view/my/index';
import Invoice from './view/invoice/index';
import Report from './view/report/index';
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
                    <Route path="/my" component={My} />
                    <Route path="/invoice" component={Invoice} />
                    <Route path="/report" component={Report} />
                </Switch>
            </RouterBox>
        );
    }
}

export default RouterConfig;
