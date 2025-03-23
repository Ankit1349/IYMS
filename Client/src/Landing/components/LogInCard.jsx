import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            // Handle success (e.g., store token, redirect)
            console.log('Login success:', response.data);
            const { token, role } = response.data;
            localStorage.setItem('token', token);

            // Redirecting based on role
            if (role === 'Admin') {
                console.log('Navigating to Admin Dashboard');
                navigate('/admin-dashboard');
            } else if (role === 'Dock Admin') {
                console.log('Navigating to Dock Dashboard');
                navigate('/dock-dashboard');
            } else if (role === 'Driver') {
                console.log('Navigating to Driver Dashboard');
                navigate('/driver-dashboard');
            } else if (role === 'Gate') {
                console.log('Navigating to Gate Dashboard');
                navigate('/gate-dashboard');
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.msg || 'Login failed');
            } else if (err.request) {
                setError('No response from server');
            } else {
                setError('An error occurred');
            }
            console.error('Login failed:', err);
        }
    };

    return (
        <div>
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                placeholder='Enter your email'
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder='Enter your password'
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-700 rounded-lg hover:bg-green-50 hover:text-black transition duration-300 ease-in-out transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            
    );
}

export default LoginCard;
