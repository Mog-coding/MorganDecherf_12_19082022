import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Error404Page from './pages/Error404Page/Error404Page';

ReactDOM.render(
    // <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/:id" element={<DashboardPage />} />
            <Route path="/404" element={<Error404Page />} />
        </Routes>
    </Router>,
    // </React.StrictMode>
    document.getElementById('root')
);
