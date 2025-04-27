import React, { useState } from 'react';
import { Box, Grid, Paper, TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const defaultObj = {

}

const Login = () => {

    const [state, setState] = useState(defaultObj);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const validate = () => {
        let isValid = true;

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setEmailError('Enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password || password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setError('');
        setSuccess('');
        try {
            const response = await fetch('https://example.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            localStorage.setItem('token', data.token);
            setSuccess('Login successful! Redirecting...');
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Grid container sx={{ height: '100%' }}>
                <Grid size={7} ></Grid>
                <Grid
                    size={5}
                    sx={{
                        backdropFilter: 'blur(4px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease',

                    }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            padding: 4,
                            width: '100%',
                            maxWidth: 400,
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                            borderRadius: 2,
                            transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
                        }}
                    >
                        <Typography variant="h4" textAlign={'center'}>
                            Hyundai Safety Analytics
                        </Typography>
                        <Typography variant="h5" textAlign={'center'}>
                            Sign In
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                            <TextField
                                label="Email"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                error={!!emailError}
                                helperText={emailError}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                error={!!passwordError}
                                helperText={passwordError}
                            />
                            {error && <Alert severity="error">{error}</Alert>}
                            {success && <Alert severity="success">{success}</Alert>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 2 }}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} /> : 'Login'}
                            </Button>

                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;