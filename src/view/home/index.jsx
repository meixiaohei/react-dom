import React, {Component} from 'react';
import {Button, WhiteSpace, WingBlank} from "antd-mobile";
import PropTypes from 'prop-types';
class Index extends Component {
    static contextTypes={
        router:PropTypes.object
    };
    constructor(props, context) {
        super(props, context);

        console.log(this.context); // it works
    }
    click=()=>{
        this.context.router.history.push('/me');
        console.log(this.context);
    };
    render() {
        return (
            <div>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <Button onClick={this.click} type="primary">啦啦啦</Button>
                </WingBlank>
                <WhiteSpace size="lg" />
            </div>
        );
    }
}
export default Index
