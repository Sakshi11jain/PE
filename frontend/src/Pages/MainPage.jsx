import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleError = (message) => {
        toast.error(message || "An error occurred");
    };

    const handleSuccess = (message) => {
        toast.success(message || "Operation successful!");
    };

    const handleLoginSubmit = async (loginInfo) => {
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `http://localhost:3000/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name } = result;
    
            if (success) {
                handleSuccess(message);
                // Store token and user info in local storage
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                    closeModal();
                }, 1000);
            } else {
                handleError(message); // If success is false, show the error message
            }
        } catch (err) {
            handleError(err.message); // Handle network or other errors
        }
    };
    
    const handleSignupSubmit = async (signupInfo) => {
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('All fields are required!');
        }
        try {
            const url = `http://localhost:3000/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message } = result;
    
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    setIsLogin(true);
                }, 1000);
            } else {
                handleError(message); // Handle error directly with message from backend
            }
        } catch (err) {
            handleError(err.message); // Handle any network or server error
        }
    };    

    const LoginForm = ({ onSubmit }) => {
        const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setLoginInfo((prev) => ({ ...prev, [name]: value }));
        };

        return (
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(loginInfo); }} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        value={loginInfo.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        value={loginInfo.password}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Login</button>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <button type="button" onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline">
                        Signup
                    </button>
                </p>
            </form>
        );
    };

    const SignupForm = ({ onSubmit }) => {
        const [signupInfo, setSignupInfo] = useState({ name: '', email: '', password: '' });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setSignupInfo((prev) => ({ ...prev, [name]: value }));
        };

        return (
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(signupInfo); }} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-700 text-center">Signup</h2>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        value={signupInfo.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        value={signupInfo.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        value={signupInfo.password}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Signup</button>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <button type="button" onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline">
                        Login
                    </button>
                </p>
            </form>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-800 text-white">
            <h1 className="text-5xl font-bold mb-4">PrepEdge</h1>
            <p className="text-lg text-center mb-8 px-4">
                PrepEdge is your ultimate platform to ace technical interviews. Practice, learn, and grow with interactive features designed just for you.
            </p>
            <button
                className="bg-slate-300 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-400"
                onClick={handleGetStartedClick}
            >
                Get Started
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 text-xl"
                        >
                            &times;
                        </button>
                        {isLogin ? (
                            <LoginForm onSubmit={handleLoginSubmit} />
                        ) : (
                            <SignupForm onSubmit={handleSignupSubmit} />
                        )}
                    </div>
                    <ToastContainer />
                </div>
            )}
        </div>
    );
}

export default MainPage;
