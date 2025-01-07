import React, { useState } from 'react';
import logo from './logo.svg';
// import { Select, InputLabel, MenuItem } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddMovieButton } from './aboutPage'; // Ensure this import matches your component
import { Login } from './Login';
import { Register } from './Register';
import { useAuth } from './context/AuthContext';
// import Typography from '@mui/material/Typography'
// <Typography variant="h1" color="initial">This is a link to </Typography>

function App() {
    const { userLoggedIn } = useAuth(); // Get authentication status from context
    const [currentForm, setCurrentForm] = useState('Login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            {/* <EnterMeasure /> */}

            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}
            
         
            

            {/* <Stack direction="row">
                <Button variant="contained">Click Me</Button>
                <Button variant="contained" sx={{ width: "30%" }}>Click Me</Button>
                <Button variant="contained" sx={{ width: "300px" }}>Click Me</Button>
            </Stack> */}

            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    );
}

export default App;
