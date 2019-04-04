import React, {Component} from 'react';
import Nav from '@components/nav/index';
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
        this.context.router.history.push('/my');
        console.log(this.context);
    };
    render() {
        return (
            <Nav selectedTab={'home'}>
                啦啦啦阿拉2121 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉1 <br/>
                啦啦啦阿拉132131<br/>
            </Nav>
        );
    }
}
export default Index
