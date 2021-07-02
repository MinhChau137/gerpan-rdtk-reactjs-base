import React from 'react';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | Gerpan</title>
      </Helmet>
      <div>
        <h1>Login</h1>
        <a href="/">Go to Home page</a>
        <br />
        <a href="/register">Register</a>
      </div>
    </>
  );
};

export default Login;
