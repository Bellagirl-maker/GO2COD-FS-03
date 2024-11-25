import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Handle logout functionality
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        window.location.href = '/login'; // Redirect to login
    };

    // Simulate fetching chat messages
    useEffect(() => {
        const fetchMessages = async () => {
            // Replace this with API call if backend is connected
            const dummyMessages = [
                { id: 1, sender: 'John', text: 'Hi there!' },
                { id: 2, sender: 'You', text: 'Hello!' },
            ];
            setMessages(dummyMessages);
        };

        fetchMessages();
    }, []);

    // Handle sending a new message
    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        setMessages([...messages, { id: Date.now(), sender: 'You', text: newMessage }]);
        setNewMessage('');
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
                {/* Logout Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Chat Messages</h2>
                    <div className="border rounded p-4 h-64 overflow-y-auto bg-gray-50">
                        {messages.map((msg) => (
                            <div key={msg.id} className="my-2">
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input for Sending Messages */}
                <div className="mt-4">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="border rounded w-full p-2"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={handleSendMessage}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
