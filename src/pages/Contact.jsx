import React from 'react'
import ScrollTopButton from '../components/ScrollTopButton'
// import Preloader from '../components/Preloader'
import Footer from '../shared/Footer'
import Nav from '../shared/Nav'
import NewsLetter from '../components/NewsLetter'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="main-page-wrapper p0">
      {/* <!-- ===================================================
      Loading Transition
			==================================================== --> */}
      {/* <Preloader /> */}


      {/* <!--
      =============================================
      Theme Main Menu
      ============================================== 
			--> */}
      <Nav />
      {/* <!-- /.theme-main-menu --> */}



      {/* <!--
      =============================================
      Fancy Hero Four
      ============================================== 
			--> */}

      <div className="fancy-hero-four space-fix">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="shapes shape-five"></div>
        <div className="shapes shape-six"></div>
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                <h6>Contact us</h6>
                <h2>Feel free to contact us or just say hi!</h2>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.fancy-hero-four --> */}



      {/* <!--
      =============================================
      Contact Style Two
      ============================================== 
			--> */}

      <div className="contact-style-two">
        <div className="container">
          <div className="contact-info-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 d-lg-flex">
                <div className="address-info">
                  <div className="icon d-flex align-items-end"><img src="assets/images/icon/44.svg" alt="" /></div>
                  <div className="title">Location</div>
                  <p className="font-rubik">Dhaka, Kawran Bazar <br /> 1201 Metro</p>
                </div>
                {/* <!-- /.address-info --> */}
              </div>
              <div className="col-lg-4 col-sm-6 d-lg-flex">
                <div className="address-info">
                  <div className="icon d-flex align-items-end"><img src="assets/images/icon/45.svg" alt="" /></div>
                  <div className="title">Contact</div>
                  <p className="font-rubik">bawejkor@duwvude.gov <br />(779) 564-1593</p>
                </div>
                {/* <!-- /.address-info --> */}
              </div>
              <div className="col-lg-4 col-sm-6 d-lg-flex">
                <div className="address-info">
                  <div className="icon d-flex align-items-end"><img src="assets/images/icon/46.svg" alt="" /></div>
                  <div className="title">Social Media</div>
                  <p className="font-rubik">Find on social media</p>
                  <ul className="d-flex justify-content-center">
                    <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
                  </ul>
                </div>
                {/* <!-- /.address-info --> */}
              </div>
            </div>
            <img src="assets/images/shape/64.svg" alt="" className="shapes shape-one" />
          </div>
          {/* <!-- /.contact-info-wrapper --> */}

          <div className="form-style-classic mt-150 mb-170 md-mt-80">
            <form action="#" id="contact-form" data-toggle="validator" >
              <div className="messages"></div>
              <div className="row controls">
                <div className="col-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200">
                  <div className="input-group-meta form-group mb-60 has-error has-danger">
                    <label>First Name</label>
                    <input type="text" placeholder="Michel" name="Fname" required="required" data-error="Name is required." />
                    {/* <div className="help-block with-errors"><ul className="list-unstyled"><li>Name is required.</li></ul></div> */}
                  </div>
                </div>
                <div className="col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200">
                  <div className="input-group-meta form-group mb-60 has-error has-danger">
                    <label>Last Name</label>
                    <input type="text" placeholder="Hawkins" name="Lname" required="required" data-error="Name is required." />
                    {/* <div className="help-block with-errors"><ul className="list-unstyled"><li>Name is required.</li></ul></div> */}
                  </div>
                </div>
                <div className="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                  <div className="input-group-meta form-group mb-60 has-error has-danger">
                    <label>Email Address</label>
                    <input type="email" placeholder="saeslal@zouj.co.uk" name="email" required="required" data-error="Valid email is required." />
                    {/* <div className="help-block with-errors"><ul className="list-unstyled"><li>Valid email is required.</li></ul></div> */}
                  </div>
                </div>
                <div className="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                  <div className="input-group-meta form-group lg mb-40 has-error has-danger">
                    <label>Your Message</label>
                    <textarea placeholder="your message here.." name="message" required="required" data-error="Please,leave us a message."></textarea>
                    {/* <div className="help-block with-errors"><ul className="list-unstyled"><li>Please,leave us a message.</li></ul></div> */}
                  </div>
                </div>
                <div className="col-12 aos-init" data-aos="fade-up" data-aos-duration="1200"><button className="theme-btn-six lg">Send Message</button></div>
              </div>
            </form>
          </div>
          {/* <!-- /.form-style-classic --> */}
        </div>
      </div>





      {/* 
        // <!-- /.contact-style-two --> */}



      {/* <!--
        =====================================================
        Fancy Short Banner Three
        =====================================================
			--> */}
      <NewsLetter />
      {/* <!-- /.fancy-short-banner-three --> */}




      {/* <!--
        =====================================================
        Footer Style Two
        =====================================================
			--> */}
      <Footer />
      {/* <!-- /.theme-footer-two --> */}




      {/* <!-- Scroll Top Button --> */}
      <ScrollTopButton />



    </div>
  )
}

export default Contact