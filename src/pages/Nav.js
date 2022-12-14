import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <div className='Navstyle'>

<nav className="navbar navbar-expand-lg navbar-dark">
  <Link className="navbar-brand ">Random User</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home </Link>
      </li>
      <li className="nav-item">
        <Link to="/user" className="nav-link">User</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">Create Account</Link>
      </li>
  
    </ul>
  </div>
</nav>

    </div>
  )
}
