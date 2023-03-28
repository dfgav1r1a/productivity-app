import React from "react";
import "./Login.css";

const Login = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = e.target;
    const AUTH_ENDPOINT_BACKEND = `${process.env.REACT_APP_BACKEND_URL}/auth/login`
    const response = await fetch(
      AUTH_ENDPOINT_BACKEND,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      }
    );

    const data = await response.json();
    localStorage.setItem('token', data.token);
    window.location.reload();
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <span>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' name='email'/>
        </span>
        <span>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' name='password'/>
        </span>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;

