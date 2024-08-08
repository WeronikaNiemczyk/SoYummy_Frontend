import cookies from "./cookies";
import { Navigate } from 'react-router-dom';

const CheckRoute = ({ element: Component, redirectTo = '/' }) => {
    const isAuthenticated = cookies.readCookie();
    console.log("isAuthenticated:", isAuthenticated); // Debugowanie

    if (!isAuthenticated) {
        console.log("Redirecting to:", redirectTo); // Debugowanie
        return <Navigate to={redirectTo} />;
    }
    
    console.log("Rendering component:", Component); // Debugowanie
    return Component;
};

export default CheckRoute;