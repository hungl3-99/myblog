import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LogoutOutlined , AppstoreOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import About from './About'
import { AppBar } from '@material-ui/core';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class DashBoard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <Header className="header">
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1">DashBoard</Menu.Item>
                        <Menu.Item key="2">Setting</Menu.Item>
                        <Menu.Item key="3">Account</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="App">
                                    <Menu.Item key="1"><Link to = "/">Main</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to = "/admin">Dashboard</Link></Menu.Item>
                                    <Menu.Item key="3">Post</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<UserOutlined />} title="Users">
                                    <Menu.Item key="4">Profile</Menu.Item>
                                </SubMenu>

                                <Menu.Item key="5" icon={<LogoutOutlined />}>Log Out</Menu.Item>


                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                    </Layout>
                </Content>

            </div>

        )
    }
}