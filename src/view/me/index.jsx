import React, {Component} from 'react';
import Nav from '@components/nav/index';
import PropTypes from 'prop-types';
class Me extends Component {
    static contextTypes={
        router:PropTypes.object
    };
    constructor(props,context) {
        super(props,context);
        this.state = {
            selectedTab: props.selectedTab,
            hidden: false,
            fullScreen: false,
        };
    };
    render() {
        const props = this.props;
        return (
            <Nav selectedTab={'yellowTab'}>
                lalala
            </Nav>
        );
    }
}

export default Me
