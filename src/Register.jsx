import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { 
    doCreateUserWithEmailAndPassword, 
    doSignInWithEmailAndPassword 
} from "./config/auth";
export const Register = (props) => {
    const { userLoggedIn } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            setError('');
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (err) {
                setError(err.message);
                setIsRegistering(false);
            }
        }
    };

    return (
        <div className="auth-form-container">
            {userLoggedIn && (<Navigate to={'/aboutPage'} replace={true} />)}
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}  
                    type="text" 
                    placeholder="name" 
                    id="name" 
                    name="name"
                />
                <label htmlFor="email">Email</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}  
                    type="email" 
                    placeholder="email" 
                    id="email" 
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    type="password" 
                    id="password" 
                    name="password"
                />
                <button type="submit" disabled={isRegistering}>
                    {isRegistering ? 'Registering...' : 'Register'}
                </button>
            </form>
            <button 
                onClick={() => props.onFormSwitch('Login')} 
                className="link-btn"
            >
                Already have an account? Log In here
            </button>
        </div>
    );
};