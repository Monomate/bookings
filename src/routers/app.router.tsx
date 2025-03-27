import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../screens';

import PublicRouter from './public.router';
import PrivateRouter from './private.router';
import DashboardRouter from './dashboard.router';

const AppRouter: FC = () => (
    <Routes>
        <Route
            path="/login"
            element={(
                <PublicRouter>
                    <Login />
                </PublicRouter>
            )}
        />
        <Route
            path="/*"
            element={(
                <PrivateRouter>
                    {/* TODO: Add Layout */}
                    <DashboardRouter />
                </PrivateRouter>
            )}
        />
    </Routes>
);

export default AppRouter;