import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import staff from '../assets/staff.webp'; // Add appropriate paths for images
import student from '../assets/student.jpg'; // Add appropriate paths for images

const Signup = () => {
    const [accountType, setAccountType] = useState('Parent'); // Default is Parent
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleAccountTypeChange = (type) => {
        setAccountType(type);
    };

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Signing up as ${accountType}`);
        console.log('Credentials:', credentials);
        // Insert logic for API call or form submission
    };

    return (
        <div className="sign-up-container">
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
            <form onSubmit={handleSubmit} className="sign-up-form">
                <p3>Hello {accountType.toLowerCase()}! Please fill out the form below to get started</p3>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={credentials.name}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                <div className="form-group">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={credentials.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-btn">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link></button>

                <div className="extra-links">
                    <p>Already have an account? <a href="/">Sign In</a></p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
