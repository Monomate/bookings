import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens';

const DashboardRouter: FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
);

export default DashboardRouter;
