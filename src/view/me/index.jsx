import React, {Component} from 'react';
import {Button, WhiteSpace, WingBlank} from "antd-mobile";

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <Button type="primary">memememe</Button>
                </WingBlank>
                aaaaaa
                <WhiteSpace size="lg" />
            </div>
        );
    }
}

export default Me
