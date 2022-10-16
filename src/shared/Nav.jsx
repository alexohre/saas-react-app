import React from 'react'
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="theme-main-menu sticky-menu theme-menu-three">
      <div className="d-flex align-items-center justify-content-center">
        <div className="logo">
          <Link to="/"><img src="assets/images/logo/deski_01.svg" alt="" /></Link>
        </div>

        <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
          <div className="nav-container">
            <button className="navbar-toggler">
              <span></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
              <div className="d-lg-flex justify-content-between align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item position-static active">
                    <Link to="/" className="nav-link " >Home</Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link to="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">Company</Link>

                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/news" className="dropdown-item">News</Link>
                      </li>
                      <li>
                        <Link to="/#" className="dropdown-item">APIs</Link>
                      </li>
                      <li>
                        <Link to="/services" className="dropdown-item">Services</Link>
                      </li>

                    </ul>

                  </li>

                  <li className="nav-item">
                    <Link to="/faqs" className="nav-link " >Faqs</Link>
                  </li>

                  <li className="nav-item ">
                    <Link to="/contact" className="nav-link " >Contact Us</Link>
                  </li>

                </ul>

                <ul className="right-widget user-login-button d-flex align-items-center justify-content-center">
                  <li>
                    <a href="/login" className="signIn-action d-flex align-items-center">
                      <img src="assets/images/icon/52.svg" alt="" />
                      <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="/sign-up.html" className="signUp-action d-flex align-items-center">
                      <span>Getting Started</span>
                      <img src="assets/images/icon/53.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav