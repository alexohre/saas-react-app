import React from 'react'

function Faqs() {
  return (
    <div className="faq-classic with-bg">
      <img src="assets/images/shape/86.svg" alt="" className="shapes shape-one" />
      <img src="assets/images/shape/87.svg" alt="" className="shapes shape-two" />
      <img src="assets/images/shape/88.svg" alt="" className="shapes shape-three" />
      <img src="assets/images/shape/89.svg" alt="" className="shapes shape-four" />
      <img src="assets/images/shape/90.svg" alt="" className="shapes shape-five" />
      <img src="assets/images/shape/91.svg" alt="" className="shapes shape-six" />
      <div className="container">
        <div className="title-style-four text-center mb-100 md-mb-70">
          <div className="row">
            <div className="col-lg-7 m-auto">
              <h6>FAQ’s</h6>
              <h2>
                <span>Questions & Answers<img src="assets/images/shape/line-shape-2.svg" alt="" /></span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            {/* <!-- ================== FAQ Panel ================ --> */}
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link">
                      How the affiliate programe works?
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse">
                  <div className="card-body">
                    <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link">
                      How delete my account?
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse">
                  <div className="card-body">
                    <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button className="btn btn-link">
                      Ho to invite people with refferel link?
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" className="collapse">
                  <div className="card-body">
                    <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h5 className="mb-0">
                    <button className="btn btn-link">
                      Is ios app available for the iphone?
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" className="collapse">
                  <div className="card-body">
                    <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* <!-- ================== FAQ Panel ================ --> */}
            <div id="accordiontwo">
              <div className="card">
                <div className="card-header" id="headingOne2">
                  <h5 className="mb-0">
                    <button className="btn btn-link">
                      How the affiliate programe works?
                    </button>
                  </h5>
                </div>
                <div id="collapseOne2" className="collapse">
                  <div className="card-body">
                    <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo2">
                  <h5 className="mb-0">
                    <button className="btn btn-link">
                      How to create customer panel?
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo2" className="collapse show">
                  <div className="card-body">
                    <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree2">
                  <h5 className="mb-0">
                    <button className="btn btn-link">
                      How delete my account?
                    </button>
                  </h5>
                </div>
                <div id="collapseThree2" className="collapse">
                  <div className="card-body">
                    <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour2">
                  <h5 className="mb-0">
                    <button className="btn btn-link">
                      Ho to invite people with refferel link?
                    </button>
                  </h5>
                </div>
                <div id="collapseFour2" className="collapse">
                  <div className="card-body">
                    <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs