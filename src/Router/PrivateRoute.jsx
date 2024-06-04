import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    if (loading) {
        return<p>Loading....</p>
    }

    if (user) {
        return children
    } else {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    
};

export default PrivateRoute;