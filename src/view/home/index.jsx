import React, {Component} from 'react';
import {Button, WhiteSpace, WingBlank} from "antd-mobile";
class Index extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(this.context.router); // it works
    }
    click=()=>{
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
