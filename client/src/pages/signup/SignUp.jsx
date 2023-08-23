import React, { useMemo, useState } from 'react'
import { Button, TextField, Container, Paper, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

const SignUp = () => {
    const [formData,setFromData] = useState({
        userName:"",
        email: "",
        password: "",
    })
    const [isSubmitted,setSubmitted] = useState(false)
	
	const validateField = (name, value) => {
		switch (name) {
		  case 'userName':
			return value.length < 3 ? 'Username must be at least 3 characters long' : null;
		  case 'email':
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return !emailRegex.test(value) ? 'Invalid email address' : null;
		  case 'password':
			return value.length < 6 ? 'Password must be at least 6 characters long' : null;
		  default:
			return null;
		}
	};

	const validateForm = () => {
		const errors = {};
		Object.keys(formData).forEach((fieldName) => {
		  errors[fieldName] = validateField(fieldName, formData[fieldName]);
		});
	
		return errors
	};
	const errors = useMemo(()=>{
		return isSubmitted && validateForm()
	},[formData,isSubmitted]);
	
    const handleFormDataChange = (e,field) => {
      const {name,value} = e.target
      setFromData({...formData,[name]:e.target.value});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      if( Object.values(errors).some((error) => error === null)){
		console.log('form is submitted')
      }
    };
  
    return (
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h5" gutterBottom>
            Singup
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="User Name"
              name='userName'
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.userName}
              onChange={(e) => handleFormDataChange(e,"userName")}
            />
            {errors.userName && <span>{errors.userName}</span>}
            <TextField
              label="Email"
              name='email'
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.email}
              onChange={(e) => handleFormDataChange(e,"email")}
            />
			{errors.email && <span>{errors.email}</span>}
            <TextField
              label="Password"
			  name="password"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              value={formData.password}
              onChange={(e) => handleFormDataChange(e,"password")}
            />
			{errors.password && <span>{errors.password}</span>}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Signup
            </Button>
            <Link to="/login">
              go to login
            </Link>
          </form>
        </Paper>
      </Container>
    );
}

export default SignUp