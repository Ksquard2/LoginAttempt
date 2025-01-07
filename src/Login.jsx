import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { doSignInWithEmailAndPassword } from "./config/auth";
import { Link } from "react-router-dom";
export const Login = (props) => {
    const { setUserLoggedIn } = useAuth(); // Use the setter function
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!email || !password) {
            setError('Email and password are required');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setError('');
    
        if (!validateForm()) {
            return;
        }
    
        if (isSigningIn) {
            return;
        }
    
        try {
            setIsSigningIn(true);
            console.log('Attempting to sign in with:', email);
    
            const userCredential = await doSignInWithEmailAndPassword(email, password);
            
            console.log('User signed in successfully:', userCredential.user);
    
            // Update userLoggedIn state
            setUserLoggedIn(true); // Use the setter function
    
            // Redirect to the about page
            window.location.href = '/aboutPage';
    
        } catch (err) {
            console.error('Login Error:', {
                code: err.code,
                message: err.message,
                fullError: err
            });
    
            switch (err.code) {
                case 'auth/user-not-found':
                    setError('No user found with this email. Please check your email or register.');
                    break;
                case 'auth/wrong-password':
                    setError('Incorrect password. Please try again.');
                    break;
                case 'auth/invalid-email':
                    setError('The email address is not valid.');
                    break;
                case 'auth/user-disabled':
                    setError('This account has been disabled.');
                    break;
                case 'auth/invalid-credential':
                    setError('Invalid credentials. Please check your email and password.');
                    break;
                default:
                    setError('An unexpected error occurred. Please try again.');
            }
        } finally {
             setIsSigningIn(false);
        }
    };

    return (
        <div className="auth-form-container">
            {error && (
                <div style={{
                    color: 'red', 
                    marginBottom: '10px', 
                    padding: '10px', 
                    border: '1px solid red',
                    backgroundColor: '#ffeeee'
                }}>
                    {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}  
                    type="email" 
                    placeholder="Email" 
                    id="email" 
                    name="email"
                    required
                />
                
                <label htmlFor="password">Password</label>
                <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    type="password" 
                    placeholder="Password"
                    id="password" 
                    name="password"
                    required
                />
                
                <button 
                    type="submit" 
                    disabled={isSigningIn}
                >
                    {isSigningIn ? 'Signing In...' : 'Log In'}
                </button>
            </form>
            <Link to={"/Register"}>
            <button>
                Don't have an account? Register
            </button>
            </Link>
            
        </div>
    );
};
