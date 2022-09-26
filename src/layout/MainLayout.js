import React from 'react';
import { Layout, Button } from 'antd';
import { Outlet } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import MainHeader from '../components/MainHeader';
import LeftSiderBar from '../components/SideBar';
import PropTypes from 'prop-types';

import '../assets/styles/index.scss';
import './index.scss';
const { Header, Footer, Sider, Content } = Layout;

class MainLayout extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            // route: this.props.routerData.childRoutes,
            collapsed: false,
        };
    }
    toggleCollapsed = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        const { collapsed } = this.state;

        return (
            <Layout className="full-layout admin-layout fixed">
                <Header>
                    <MainHeader />
                </Header>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <LeftSiderBar />
                    </Sider>
                    <Content>
                        <Button
                            type="primary"
                            onClick={this.toggleCollapsed}
                            className='btn-collapsed'
                        >
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>

        );
    }
}

MainLayout.propTypes = {
    routerData: PropTypes.object,
};

export default MainLayout;