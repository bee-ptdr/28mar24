import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
 
  return (
    <div>
        <h1>wel-Come</h1>
        <button className='btn btn-outline-success'><Link to="/login">Login</Link></button>
        <button className='btn btn-outline-success'><Link to="/todo">Todo</Link></button>
    </div>
  )
}

export default Home