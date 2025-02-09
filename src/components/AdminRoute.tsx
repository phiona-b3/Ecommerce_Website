//Protection for the Admin Routes
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';

interface AdminRouteProps {
    children: React.ReactNode
}

const AdminRoute: React.FC<AdminRouteProps> = ( { children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user)
        })
        return () => unsubscribe();
    }, [])

if (isAuthenticated === null) return <p>Loading...</p>;
return isAuthenticated ? <>{children}</> : <Navigate to="/admin-login" />
}

export default AdminRoute