import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, TextField } from '@mui/material'
import loginAction from '../actions/login-action';
import validateEmailAction from '../actions/validateEmail';

const LoginForm = () => {
    const [ state, setState ] = useState({ email: '', password: '' });
    const [ fail, setFail ] = useState('');
    const [ validateemail, setValidatedEmail ] = useState()
    const navigate = useNavigate();

    const customStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        height: '23rem',
        margin: '1rem auto',
        width: '20rem'
    };

    const textFieldStyle = {
        margin: '1rem',
    };

    const handleChange = (e) => {
        e.preventDefault();
        setState({...state, [e.target.name]: e.target.value})
        setFail('')
        setValidatedEmail(validateEmailAction(state.email))
    }

    const handleClick = async () => {
        setFail('')
        if(validateemail && state.password.length) {
            const loginresult = await loginAction(state);
            if(!loginresult.data.success) {
                setFail(loginresult.data.message)
            } else {
                navigate('/home')
            }
        } else if(state.email.length && !validateemail) {
            setFail('Incorrect email format')
        } else if(state.password.length && !state.email.length) {
            setFail('You must enter an email')
        } else if(!state.password.length && state.email.length) {
            setFail('You must enter a password')
        } 
    }

    return(
        <Grid>
            <Paper elevation={12} style={customStyle}>
                <img alt='Tipie Logo' src='http://tipieapp.com/www/img/tipie-logo-01.png' style={{ width: '100px'}}/>
                <Grid justifyContent='center'>
                    <h2>TippieApp Challenge</h2>
                </Grid>
                <TextField autoComplete='off' label="email" variant="outlined" required style={textFieldStyle} name='email' onChange={(e) => handleChange(e)}/>
                <TextField label="password" variant="outlined" type='password' required style={textFieldStyle} name='password' onChange={(e) => handleChange(e)} />
                <Button variant='contained' onClick={() => handleClick()}>Login</Button> 
                {
                    fail ? <p style={{ marginBlock: '0', color: 'red' }}>{fail}</p> : <p></p>
                }
            </Paper>
        </Grid>
    )
};

export default LoginForm;