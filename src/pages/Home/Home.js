import React from 'react';
import { Helmet } from 'react-helmet';
import 'src/assets/styles/Home/HomePage.css'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Gerpan</title>
      </Helmet>
      <div className="main">
        <h1>Home</h1>
        <div className="routes">
          <a href="/app/products">Go to Product page</a>
          <a href="/login">Go to Login page</a>
        </div>
      </div>
    </>
  );
};

export default Home;
