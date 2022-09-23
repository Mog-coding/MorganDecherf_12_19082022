import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

ReactDOM.render(
    // <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<DashboardPage />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
