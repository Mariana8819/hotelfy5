
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar el token del almacenamiento local
        localStorage.removeItem('token');
        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
    };

    React.useEffect(() => {
        handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;
