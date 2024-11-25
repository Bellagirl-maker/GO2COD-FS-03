import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';

const Home = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Welcome to the Chat App</h1>
        <div className="space-x-4">
            <Link to="/login">
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Login
                </button>
            </Link>
            <Link to="/register">
                <button className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                    Register
                </button>
            </Link>
        </div>
    </div>
);

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if user is logged in

    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Routes>
                    {/* Default Route for '/' */}
                    <Route path="/" element={<Home />} />

                    {/* Public Routes */}
                    <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/chat" />} />
                    <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/chat" />} />

                    {/* Protected Route */}
                    <Route path="/chat" element={isAuthenticated ? <Chat /> : <Navigate to="/login" />} />

                    {/* Fallback Route */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
