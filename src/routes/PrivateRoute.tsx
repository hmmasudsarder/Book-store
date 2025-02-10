
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser, useCurrentToken } from "../redux/features/auth/authSlice";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useSelector(selectCurrentUser);
    const token = useSelector(useCurrentToken);
    const location = useLocation();

    // if the user get no token and no user, redirect to the login immediately
    if (!token || !user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
