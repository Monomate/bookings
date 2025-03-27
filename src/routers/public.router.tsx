import { ReactNode } from "react";
import { useAuthStore } from "../store/auth.store";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }: { children: ReactNode }) => {
    const user = useAuthStore((state) => state.data);
    if (user) return <Navigate to="/" />;

    return children;
};

export default PublicRouter;
