import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Account from './Pages/Account';
import Task from './Pages/Task';
import Lead from './Pages/Lead';
import Opportunity from './Pages/Opportunity';
import Dashboard from './Pages/Dashboard';

const MainRoutes = () => {

    // const navigate = useNavigate();

    // const handleWindowSizeChange = () => {
    //     setIsMobile(window.innerWidth <= 481);
    //     setIsTablet(window.innerWidth <= 768);
    //     setIsDesktop(window.innerWidth >= 769);
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', handleWindowSizeChange);
    //     return () => {
    //     window.removeEventListener('resize', handleWindowSizeChange);
    //     }
    // }, []);

    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/account' element={<Account />} />
                <Route path='/task' element={<Task />} />
                <Route path='/lead' element={<Lead />} />
                <Route path='/opportunity' element={<Opportunity />} />
            </Routes>
        </div>
    );
}

export default MainRoutes;