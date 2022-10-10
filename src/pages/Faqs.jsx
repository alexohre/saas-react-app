import React from 'react'
import ScrollTopButton from '../components/ScrollTopButton'
import Preloader from '../components/Preloader'
import Footer from '../shared/Footer'
import Nav from '../shared/Nav'
import NewsLetter from '../components/NewsLetter'

function Faqs() {
  return (
    <div className="main-page-wrapper p0">
      {/* <!-- ===================================================
      Loading Transition
			==================================================== --> */}
      <Preloader />


      {/* <!--
      =============================================
      Theme Main Menu
      ============================================== 
			--> */}
      <Nav />
      {/* <!-- /.theme-main-menu --> */}






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

export default Faqs