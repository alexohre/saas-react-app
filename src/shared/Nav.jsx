import React from 'react'

function Nav() {
  return (
    <div className="theme-main-menu sticky-menu theme-menu-three">
      <div className="d-flex align-items-center justify-content-center">
        <div className="logo"><a href="/index-doc.html"><img src="assets/images/logo/deski_01.svg" alt="" /></a></div>

        <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
          <div className="nav-container">
            <button className="navbar-toggler">
              <span></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
              <div className="d-lg-flex justify-content-between align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item position-static active">
                    <a className="nav-link " href="/#" >Home</a>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">Company</a>

                    <ul className="dropdown-menu">
                      <li>
                        <a href="/#" className="dropdown-item">News</a>
                      </li>
                      <li>
                        <a href="/#" className="dropdown-item">APIs</a>
                      </li>
                      <li>
                        <a href="/#" className="dropdown-item">Services</a>
                      </li>

                    </ul>

                  </li>

                  <li className="nav-item">
                    <a className="nav-link " href="/#" >Faqs</a>
                  </li>

                  <li className="nav-item ">
                    <a className="nav-link " href="/#" >Contact Us</a>
                  </li>

                </ul>

                <ul className="right-widget user-login-button d-flex align-items-center justify-content-center">
                  <li>
                    <a href="/login.html" className="signIn-action d-flex align-items-center">
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