import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';

const MainRoutes = () => {

    const navigate = useNavigate();

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
                {/* <Route path='/login' element={user ? <Dashboard /> : <Login />} /> */}
                <Route path='/login' element={<Login />} />
                {/* <Route path='/dashboard' element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>} /> */}
            </Routes>
        </div>
    );
}

export default MainRoutes;