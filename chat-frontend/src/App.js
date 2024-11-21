import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// import Chat from './Chat'; // Add this later for the chat interface

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if user is logged in

    return (
        <Router>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/chat" />} />
                    <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/chat" />} />

                    {/* Protected Route */}
                    <Route path="/chat" element={isAuthenticated ? <Chat /> : <Navigate to="/login" />} />

                    {/* Default Route */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>

                {/* Navigation Links */}
                <div className="absolute bottom-4 text-center">
                    {!isAuthenticated && (
                        <>
                            <Link to="/login" className="text-blue-500 mx-2">
                                Login
                            </Link>
                            <Link to="/register" className="text-blue-500 mx-2">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </Router>
    );
};

export default App;
