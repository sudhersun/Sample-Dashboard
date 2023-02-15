import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../Login-page/LoginPage_Dynamic';
import Dashboard from '../Dashboard/Dashboard';

const DashboardRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<LoginPage />} />
                    <Route exact path='/Dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default DashboardRouter;
