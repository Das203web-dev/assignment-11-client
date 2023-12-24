import { useContext } from 'react';
import { AuthProvider } from '../Provider/Provider';
import { Button, Spinner } from 'flowbite-react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthProvider);
    const location = useLocation();
    console.log("location is ", location)
    console.log("loading is", loading)
    console.log("currentuser is", currentUser)
    if (loading) {
        return (<Button color="gray">
            <Spinner aria-label="Alternate spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
        </Button>)
    }
    if (currentUser) {
        return children;
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;