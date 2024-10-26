import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './signin.css';
import staff from '../assets/staff.webp';
import student from '../assets/student.jpg';

const SignIn = ({ onLogin }) => { // Accept onLogin prop
    const [accountType, setAccountType] = useState('Parent');
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAccountTypeChange = (type) => {
        setAccountType(type);
    };

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3005/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (response.ok) {
                setError('');
                localStorage.setItem('userEmail', credentials.email); // Store email in local storage
                onLogin(credentials.email); // Pass email to parent component
                navigate('/home');
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="sign-in-container">
            <h3>Choose Account Type</h3>
            <div className="account-type-selection">
                <div
                    className={`account-type-card ${accountType === 'Parent' ? 'selected' : ''}`}
                    onClick={() => handleAccountTypeChange('Parent')}
                >
                    <img src={staff} alt="Parent" />
                    <p>Parent</p>
                </div>
                <div
                    className={`account-type-card ${accountType === 'Student' ? 'selected' : ''}`}
                    onClick={() => handleAccountTypeChange('Student')}
                >
                    <img src={student} alt="Student" />
                    <p>Staff/Student</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="sign-in-form">
                <p>Hello {accountType.toLowerCase()}! Please fill out the form below to get started</p>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-btn">
                    Login
                </button>
                <div className="extra-links">
                    {/* <p>No account? <Link to="/signup">Signup</Link></p> */}
                    <p><a href="#forgot">Forgot Password?</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
