import React from 'react'
export default function Footer () {
  return (
    <div className="container-fluid main-footer">
    <div className="container" id="footer2">
    <div className="row footer-row">
      
      <div className="col-md-6 col-lg mb-5 mb-md-4">
        <a href="/" className="d-flex align-items-center mb-5 text-decoration-none footer-logo">
          <img src="./images/logolight.svg" alt="lightlogo" loading="lazy"/>
        </a>
        <ul className="list-unstyled d-flex align-items-center mt-5 social-list">
        <li className="me-3"><a className="text-white" href="#"><img src="./images/facebook.svg" alt="fb" loading="lazy"/><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="me-3"><a className="text-white" href="#"><img src="./images/instagram.svg" alt="in" loading="lazy"/><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="me-3"><a className="text-white" href="#"><img src="./images/twitter.svg" alt="tw" loading="lazy"/></a></li>
        </ul>
      </div>

      <div className="d-md-none d-lg-flex col-md-0 col-lg-1">

      </div>

      <div className="text-center text-md-start col-md-6 col-lg mb-5 mb-md-4">
        <h5>Community</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">NFT</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Token</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Landlords</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Discord</a></li>
        </ul>
      </div>

      <div className="text-center text-md-start col-md-6 col-lg mb-5 mb-md-4">
        <h5>Places</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Castle</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Farms</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Beach</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">learn more</a></li>
        </ul>
      </div>

      <div className=" text-center text-md-start col-md-6 col-lg mb-5 mb-md-4">
        <h5>About us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Road map</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Creators</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Career</a></li>
          <li className="nav-item mb-2"><a  className="nav-link p-0 ">Contact us</a></li>
        </ul>
      </div>
      <div className='col-12 text-center text-md-start'>
      <p className="mt-5">© 2022 Metabnb</p>
      </div>
      </div>
    </div>
    </div>
  )
}

