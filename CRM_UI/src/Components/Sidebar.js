import { FileAddOutlined, HomeOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState([]);
    const [defaultActiveBar, setDefaultActiveBar] = useState('');

    // useEffect(() => {
    //     if (window.location.href.endsWith('/')) setDefaultActiveBar('');
    //     if (window.location.href.endsWith('/settings')) setDefaultActiveBar('settings');
    //     if (window.location.href.endsWith('/share-post')) setDefaultActiveBar('share-post');
    //     setSiderMenuItems();
    // }, []);

    const getItem = (label, key, icon, children) => {
        return { key, icon, children, label };
    };

    const handleOnClick = (e) => {
        navigate(e.key);
    };

    const setSiderMenuItems = () => {
        let items = [
            getItem('Dashboard', '', <HomeOutlined />),
            getItem('Overview', 'overview', <MailOutlined />),
            getItem('Share Post', 'share-post', <FileAddOutlined />),
            getItem('Settings', 'settings', <SettingOutlined />)
        ];
        setMenuItems(items);
    };

    return (
        <div>
            <Menu
                // theme="dark"
                mode="inline"
                style={{ height: 'inherit' }}
                defaultSelectedKeys={[defaultActiveBar]}
                items={menuItems}
                onClick={handleOnClick}
            />
        </div>
    );
}

export default Sidebar;