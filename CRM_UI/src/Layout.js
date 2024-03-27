import { ConfigProvider, Dropdown, Layout, Modal, message, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import { CompassOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import MainRoutes from './Routes';

const Layouts = () => {

    const navigate = useNavigate();
    const { Header, Content, Sider } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);

    const showDeleteConfirm = () => {
        Modal.confirm({
            title: `Logout`,
            content: 'Are you sure you want to Logout?',
            okText: 'Logout',
            okType: 'danger',
            onOk: async () => {
                // setUser(null);
                // setUserId('');
                localStorage.clear();
                navigate('/login');
                message.success('You are successfully logout.');
            },
            onCancel() { },
        });
    };

    const items = [
        {
            label: (
                <p>Change Password</p>
            ),
            key: 'changePassword',
            onClick: (e) => handleMenuClick(e)
        },
        {
            label: (
                <p>Logout</p>
            ),
            key: 'logout',
            onClick: (e) => handleMenuClick(e)
        },
    ];

    const handleMenuClick = (e) => {
        if (e.key === 'logout') {
            showDeleteConfirm();
        }
        if (e.key === 'changePassword') {
            // setChangePasswordModalOpen(true);
        }
    };

    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        // colorPrimary: 'black',
                        colorPrimary: '#2276e3',
                        fontFamily: 'Rubik,Avenir,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                        borderRadius: 2,
                        // colorBgContainer: '#003b95',
                    },
                    algorithm: theme.compactAlgorithm,
                }}
            >
                <Layout className='mainLayout'>
                    <Header
                        className='header'
                        style={{
                            background: colorBgContainer,
                            // flexDirection: isTablet ? 'column' : 'row',
                            flexDirection: 'column',
                            // height: isTablet ? '5.5rem' : null
                            height: null
                        }}
                    >
                        <div className='navbar d-flex-between'>
                            <div className='d-flex-between'>
                                {/* <img src={logo} className="logoIcon" alt="logo" /> */}
                                <CompassOutlined className='logoIcon' /><h2>CRM</h2>
                            </div>
                            {/* {user && */}
                                <Dropdown menu={{ items }} >
                                    {/* {(isMobile && !isDesktop && !isTablet) ? */}
                                        <div className='userProfileDiv'>
                                            <UserOutlined className='userIcon' />
                                        </div>
                                        :
                                        <div className='userProfileDiv'>
                                            <UserOutlined className='userIcon' />
                                                {/* {JSON.parse(currUserData)?.profile?.displayName} */}
                                            <DownOutlined className='userDownArrow' />
                                        </div>
                                    {/* } */}
                                </Dropdown>
                            {/* } */}
                        </div>
                    </Header>
                    <Layout>
                        {/* {user && <Sider className='siderMenu' trigger={null} collapsible collapsed={collapsed}> */}
                        <Sider className='siderMenu' trigger={null} collapsible collapsed={collapsed}>
                            <div className="demo-logo-vertical" />
                            <Sidebar />
                        {/* </Sider>} */}
                        </Sider>
                        <Content
                            style={{
                                // margin: '24px 16px',
                                // padding: '24px 50px',
                                minHeight: '90vh',
                                // minHeight: '80vh',
                                height: '90vh',
                                overflowY: 'scroll',
                                background: colorBgContainer,
                            }}
                        >
                            <MainRoutes />
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </div>
    );
}

export default Layouts;