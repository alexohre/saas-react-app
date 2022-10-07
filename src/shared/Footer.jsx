import React from 'react'

function Footer() {
  return (
    <footer className="theme-footer-three pt-100">
      <div className="top-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-12 footer-about-widget" data-aos="fade-up" data-aos-duration="1200">
              <a href="/index-doc.html" className="logo"><img src="assets/images/logo/deski_01.svg" alt="" /></a>
            </div>
            {/* <!-- /.about-widget --> */}
            <div className="col-lg-2 col-md-4 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
              <h5 className="footer-title">Services</h5>
              <ul>
                <li><a href="/#">Web Design</a></li>
                <li><a href="/#">Development</a></li>
                <li><a href="/#">Wordpress</a></li>
                <li><a href="/#">Online Marketing</a></li>
                <li><a href="/#">Content</a></li>
              </ul>
            </div>
            {/* <!-- /.footer-list --> */}
            <div className="col-lg-2 col-md-4 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
              <h5 className="footer-title">About us</h5>
              <ul>
                <li><a href="/about-us(doc).html">About us</a></li>
                <li><a href="/#">Work Portfolio</a></li>
                <li><a href="/#">Team</a></li>
                <li><a href="/#">Plan & Pricing</a></li>
                <li><a href="/#">News</a></li>
              </ul>
            </div>
            {/* <!-- /.footer-list --> */}
            <div className="col-lg-3 col-md-4 address-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
              <h5 className="footer-title">Contact Info</h5>
              <p className="font-rubik">432 Mirpur National Stadium Market <br />Dhaka,  Bangladesh</p>
              <ul className="info">
                <li><a href="/#">deskisupportinc@gmail.com</a></li>
                <li><a href="/#" className="mobile-num">+761 412 3224</a></li>
              </ul>
              <ul className="social-icon d-flex pt-15">
                <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="/#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
              {/* </div> <!-- /.footer-list --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </div>
      </div>
      {/* <!-- /.top-footer --> */}

      <div className="container">
        <div className="bottom-footer-content">
          <div className="row">
            <div className="col-lg-8 ml-auto">
              <div className="d-md-flex align-items-center justify-content-between">
                <ul className="order-md-last" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="50" data-aos-anchor=".theme-footer-three">
                  <li><a href="/#">Privacy</a></li>
                  <li><a href="/#">Security</a></li>
                  <li><a href="/#">Terms</a></li>
                </ul>
                <p className="order-md-first" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="50" data-aos-anchor=".theme-footer-three">Copyright @2022 deski inc.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.bottom-footer --> */}
      </div>
    </footer>
  )
}

export default Footer