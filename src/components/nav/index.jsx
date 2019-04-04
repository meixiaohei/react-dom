import React, {Component} from 'react';
import {TabBar} from "antd-mobile";
import PropTypes from "prop-types";
import Header from '../header/index';
import './index.css'
class Index extends Component {
    static contextTypes={
        router:PropTypes.object
    };
    constructor(props,context) {
        super(props,context);
        this.state = {};
    };
    domInit = () => {

    };
    onPress = (key) => {
        switch (key) {
            case 'home':
                this.context.router.history.push('/');
                break;
            case 'invoice':
                this.context.router.history.push('/invoice');
                break;
            case 'report':
                this.context.router.history.push('/report');
                break;
            case 'my':
                this.context.router.history.push('/my');
                break;
        }
    };
    render() {
        const {children,selectedTab} = this.props;
        console.log(selectedTab);
        return (
            <div className={'navBox'} style={{  }}>
                <Header/>
                <div className={'navContent'}>
                    {children}
                </div>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    prerenderingSiblingsNumber={0}
                    noRenderContent={true}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={{uri:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg'}}
                        selectedIcon={{uri:'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg'}}
                        selected={selectedTab === 'home'}
                        onPress={() => {this.onPress('home');}}
                        data-seed="logId"
                    />
                    <TabBar.Item
                        title="发票管理"
                        key="invoice"
                        icon={{uri:'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg'}}
                        selectedIcon={{uri:'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg'}}
                        selected={selectedTab === 'invoice'}
                        onPress={() => {this.onPress('invoice');}}
                        data-seed="logId"
                    />
                    <TabBar.Item
                        title="报表"
                        key="report"
                        icon={{uri:'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg'}}
                        selectedIcon={{uri:'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg'}}
                        selected={selectedTab === 'report'}
                        onPress={() => {this.onPress('report');}}
                        data-seed="logId"
                    />
                    <TabBar.Item
                        title="My"
                        key="my"
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        selected={selectedTab === 'my'}
                        onPress={() => {this.onPress('my');}}
                        data-seed="logId"
                    />
                </TabBar>
            </div>
        );
    }
}

export default Index
