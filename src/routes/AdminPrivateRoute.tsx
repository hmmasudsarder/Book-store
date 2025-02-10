import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser, useCurrentToken } from "../redux/features/auth/authSlice";

const AdminPrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useSelector(selectCurrentUser);
    const token = useSelector(useCurrentToken);
    const location = useLocation();

    // If the user is not authenticated, redirect to login
    if (!token || !user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If the user is not an admin, redirect 
    if (user.role !== "admin") {
        return <Navigate to="/unauthorized" replace />;
    }

    return children; // Allow access if the user is an admin
};

export default AdminPrivateRoute;
