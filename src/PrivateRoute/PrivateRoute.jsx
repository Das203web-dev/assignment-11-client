import { useContext } from 'react';
import { AuthProvider } from '../Provider/Provider';
import { Button, Spinner } from 'flowbite-react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthProvider);
    const location = useLocation();
    if (loading) {
        return (
            <div className='mx-auto my-20 flex justify-center'>
                <Button className='h-auto' color="gray">
                    <Spinner aria-label="Alternate spinner button example" size="sm" />
                    <span className="pl-3">Loading...</span>
                </Button>
            </div>
        )
    }
    if (currentUser) {
        return children;
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;