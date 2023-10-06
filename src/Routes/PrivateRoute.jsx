import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { PropagateLoader } from 'react-spinners';


const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <>
                {loader &&
                    <div>
                        <div className='hidden lg:block absolute left-2/4 top-2/4'>
                            <PropagateLoader
                                color="#e4132bd2"
                                loading
                                size={29}
                                speedMultiplier={0.9}
                            />
                        </div>
                        <div className='lg:hidden absolute left-1/4 top-1/4'>
                            <PropagateLoader
                                color="#e4132bd2"
                                loading
                                size={29}
                                speedMultiplier={0.9}
                            />
                        </div>
                    </div>
                }
            </>
        )
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace ></Navigate>
    }

    return (
        children
    );
};

export default PrivateRoute;