import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Error404Page from './pages/Error404Page/Error404Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/:id" element={<DashboardPage />} />
            <Route path="/404" element={<Error404Page />} />
        </Routes>
    </Router>
    // </React.StrictMode>
);
