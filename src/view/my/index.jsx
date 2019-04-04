import React, {Component} from 'react';
import Nav from '@components/nav/index';
import PropTypes from 'prop-types';
class Me extends Component {
    static contextTypes={
        router:PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {};
    };
    render() {
        return (
            <Nav selectedTab={'my'}>
                lalala
            </Nav>
        );
    }
}

export default Me
