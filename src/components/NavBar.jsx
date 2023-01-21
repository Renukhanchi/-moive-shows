import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  const style ={
    textDecoration: 'none',
    color:"white",
    marginLeft:'2rem',
    fontSize:'1.2em',
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid" >
    <Link className="navbar-brand" to='/' style={style}>Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to='/' style={style}>home</Link>
        </li>
        <li className="nav-item">
         <Link to='/movies' style={style}>movies</Link>
          {/* <a className="nav-link" href="#">Features</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar