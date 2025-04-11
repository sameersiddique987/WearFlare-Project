import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoutes = ({ component }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token"); 
        if (token) {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>; 
    }

    return isAuthenticated ? component : <Navigate to="/login" />;
};

export default ProtectedRoutes;
