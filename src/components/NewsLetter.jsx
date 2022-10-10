import React from 'react'

function NewsLetter() {
  return (
    <div className="fancy-short-banner-four">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title">
                <h6>Subscribe Now</h6>
                <h2>Subscriber to our Newsletter</h2>
              </div>
              {/* <!-- /.title-style-one --> */}
            </div>
            <div className="col-lg-6">
              <div className="form-wrapper">
                <form action="#">
                  <input type="text" placeholder="Email address" />
                  <button>Subscribe</button>
                </form>
                <p className="font-rubik">Already a member? <a href="/login.html">Sign in.</a></p>
              </div>
              {/* <!-- /.form-wrapper --> */}
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.container --> */}
    </div>
  )
}

export default NewsLetter