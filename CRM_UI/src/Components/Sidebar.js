import { AccountBookOutlined, ContactsOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaTasks } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { TbBrandMyOppo } from "react-icons/tb";

const Sidebar = () => {

    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState([]);
    const [defaultActiveBar, setDefaultActiveBar] = useState('');

    useEffect(() => {
        // if (window.location.href.endsWith('/')) setDefaultActiveBar('');
        // if (window.location.href.endsWith('/settings')) setDefaultActiveBar('settings');
        if (window.location.href.endsWith('/contact')) setDefaultActiveBar('contact');
        setSiderMenuItems();
    }, []);

    const getItem = (label, key, icon, children) => {
        return { key, icon, children, label };
    };

    const handleOnClick = (e) => {
        navigate(e.key);
    };

    const setSiderMenuItems = () => {
        let items = [
            getItem('Dashboard', '', <HomeOutlined />),
            getItem('Contacts', 'contact', <ContactsOutlined />),
            getItem('Accounts', 'account', <AccountBookOutlined />),
            getItem('Tasks', 'task', <FaTasks />),
            getItem('Leads', 'lead', <SiGoogleads />),
            getItem('Opportunities', 'opportunity', <TbBrandMyOppo />)
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