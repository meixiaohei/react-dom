import React, {Component} from 'react';
import Nav from '@components/nav/index';
import PropTypes from 'prop-types';
class Index extends Component {
    static contextTypes={
        router:PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Nav selectedTab={'report'}>
                哈哈哈哈
            </Nav>
        );
    }
}

export default Index
