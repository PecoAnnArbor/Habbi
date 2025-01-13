import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';

import "./Auth.css";

const Auth = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);  // Toggle state for forms
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            console.log("Sign Up Data:", formData);
            alert("Account created successfully!");
        } else {
            console.log("Login Data:", formData);
            alert("Logged in successfully!");
        }
        navigate("/");  // Redirect to home after action
    };

    return (
        <div className="auth-container">
            <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>

            <form onSubmit={handleSubmit} className="auth-form">
                {isSignUp && (
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" className="auth-button">
                    {isSignUp ? "Sign Up" : "Log In"}
                </button>
            </form>

            {/* Toggle Button */}
            <p className="toggle-text">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? "Log In" : "Sign Up"}
                </button>
            </p>
            
            {/* Google Login */}
            <div className="google-login">
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </div>


            {/* Back to Home */}
            <button className="back-button" onClick={() => navigate("/")}>
                ⬅ Back
            </button>
        </div>
    );
};

export default Auth;
