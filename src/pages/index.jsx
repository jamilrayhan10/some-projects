import React from 'react';
import  Link  from 'next/link';
import Links from '../components/links';

const Home = () => {
  return (
    <>
    <div className="projects_area">
    <h2>All links Here</h2>
    <Links />           
    </div>
    </>
  );
};

export default Home;