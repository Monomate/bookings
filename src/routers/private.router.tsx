import { ReactNode, useEffect } from "react";
import { startLoadUser, useAuthStore } from "../store/auth.store";
import { Navigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import { getAuthCookies } from "../cookies/auth.cookies";

const PrivateRouter = ({ children }: { children: ReactNode }) => {
    const { data: user } = useAuthStore(
        useShallow(state => ({
            data: state.data,
        })
    ));

    useEffect(() => {
        const { userID  } = getAuthCookies();
        if (!user && userID) startLoadUser();
    }, []);
        
    if (!user) return <Navigate to="/login" />;

    return children;
};

export default PrivateRouter;
