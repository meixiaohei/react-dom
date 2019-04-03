import React, {Component} from 'react';
import {TabBar} from "antd-mobile";
import PropTypes from "prop-types";

class Index extends Component {
    static contextTypes={
        router:PropTypes.object
    };
    constructor(props,context) {
        super(props,context);
        this.state = {};
    };
    onPress = (key) => {
        switch (key) {
            case 'blueTab':
                this.context.router.history.push('/');
                break;
            case 'redTab':
                this.context.router.history.push('/');
                break;
            case 'greenTab':
                this.context.router.history.push('/');
                break;
            case 'yellowTab':
                this.context.router.history.push('/');
                break;
        }
    };
    render() {
        const {children,selectedTab} = this.props;
        console.log(selectedTab);
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    prerenderingSiblingsNumber={0}
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {this.onPress('blueTab');}}
                        data-seed="logId"
                    >
                        {selectedTab === 'blueTab'?children:''}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={selectedTab === 'redTab'}
                        onPress={() => {this.onPress('redTab');}}
                        data-seed="logId1"
                    >
                        {selectedTab === 'redTab'?children:''}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={selectedTab === 'greenTab'}
                        onPress={() => {this.onPress('greenTab');}}
                    >
                        {selectedTab === 'greenTab'?children:''}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {this.onPress('yellowTab');}}
                    >
                        {selectedTab === 'yellowTab'?children:''}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Index
