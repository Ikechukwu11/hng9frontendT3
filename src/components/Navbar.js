import React from 'react'
import {Link} from "react-router-dom";
export default function Navabar () {
  return (
    <nav className="navbar navbar-expand-lg my-4">
        <div className="container">
          <Link className="navbar-brand" to="#airbnb">
            <img src={'./images/logo.png'} width='150' alt='logo'/>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mt-2 justify-content-center mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/place">Place to stay</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">NFTs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Community</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item align-self-center">
                <button className="btn shadow" data-bs-toggle="modal" href="#connectwallet">Connect wallet</button>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

