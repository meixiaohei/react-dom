import React, {Component} from 'react';
import {NavBar,Icon} from 'antd-mobile';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <NavBar
                {...{icon:<Icon type="left" />}}
                mode="dark"
                rightContent={[
                    <Icon key="0" type="ellipsis" />,
                ]}
            >首页</NavBar>
        );
    }
}

export default Index
