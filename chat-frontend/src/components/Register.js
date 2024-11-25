import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/register', {
                username,
                password,
            });
            setSuccess('Registration successful! You can now log in.');
            setUsername('');
            setPassword('');
            setError('');
        } catch (err) {
            if (err.response) {
                // Server responded with a status other than 2xx
                if (err.response.status === 409) {
                    setError('Username already exists. Try a different username.');
                } else {
                    setError('Server error. Please try again later.');
                }
            } else if (err.request) {
                // Request was made but no response received
                setError('Network error. Please check your connection.');
            } else {
                // Something went wrong setting up the request
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };    
    
    return (
        <form onSubmit={handleRegister} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-bold mb-4">Register</h2>
            {success && <p className="text-green-500">{success}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block mb-1">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Register
            </button>
        </form>
    );
};

export default Register;
