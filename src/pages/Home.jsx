import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div >
        <NavBar/>
        <div className='container c1'>
        <h1>watch your most loved shows here</h1>
        <Link to='/movies' className='button'>your loved shows are here</Link>
        </div>

    </div>
  )
}

export default Home ;