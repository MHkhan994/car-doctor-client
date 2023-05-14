import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className='h-[70vh] flex items-center justify-center'>
                <progress className="progress w-56"></progress>
            </div>

        )
    }
    else if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRouts;