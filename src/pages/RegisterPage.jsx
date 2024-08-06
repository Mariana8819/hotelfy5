import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password });
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 p-6'>
            <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
            <h2 className='text-2xl font-bold text-gray-700 mb-6'>Register</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
               <div className='flex flex-col'> 
                <label className='text-gray-600 mb-1' htmlFor='username'>
                    Username:
                    </label>
                    <input 
                    id='username'
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                    className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                    />
                    </div>
                    <div className='flex flex-col'>
                <label className='text-gray-600 mb-1' htmlFor='password'>
                    Password:
                 </label>
                    <input 
                    id='password'
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                    className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                    />
                    </div>
                
                <button 
                type="submit"
                className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'
                >
                 Register
                </button>
            </form>
         </div>
      </div>
    );
};

export default RegisterPage;
