// src/Signup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful!");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
