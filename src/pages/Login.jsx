import React from 'react'

function Login() {
  return (
    <div class="user-data-page clearfix d-lg-flex">
				<div class="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
					<div class="illustration-holder">
						<img src="assets/images/assets/ils_08.svg" alt="" class="illustration" />
						<img src="assets/images/assets/ils_08.1.svg" alt="" class="shapes shape-one" />
						<img src="assets/images/assets/ils_08.2.svg" alt="" class="shapes shape-two" />
					</div>
				</div>
         {/* <!-- /.illustration-wrapper --> */}

				<div class="form-wrapper">
					<div class="d-flex justify-content-between">
						<div class="logo"><a href="index.html"><img src="assets/images/logo/deski_01.svg" alt="" /></a></div>
						<a href="/" class="font-rubik go-back-button">Go to home</a>
					</div>
					<form action="#" class="user-data-form mt-80 md-mt-40">
						<h6>Hi buddy, welcome Back!</h6>
						<p class="header-info pt-30 pb-50">Still don't have an account? <a href="sign-up.html">Sign up</a></p>

						<div class="row">
							<div class="col-12">
								<div class="input-group-meta mb-50 sm-mb-70">
									<label>Email</label>
									<input type="email" placeholder="bolcovfed@ce.edu" />
								</div>
							</div>
							<div class="col-12">
								<div class="input-group-meta mb-15">
									<label>Password</label>
									<input type="password" placeholder="Enter Password" class="pass_log_id" />
									<span class="placeholder_icon"><span class="passVicon"><img src="assets/images/icon/view.svg" alt="" /></span></span>
								</div>
							</div>
							<div class="col-12">
								<div class="agreement-checkbox d-flex justify-content-between align-items-center">
									<div>
										<input type="checkbox" id="remember" />
										<label for="remember">Keep me logged in</label>
									</div>
									<a href="/#">Forget Password?</a>
								</div>
                 {/* <!-- /.agreement-checkbox --> */}
							</div>
							<div class="col-12">
								<button class="theme-btn-one mt-50 mb-50">Login</button>
							</div>
							<div class="col-12">
								<p class="text-center font-rubik copyright-text">© Copyright 2021 deski</p>
							</div>
						</div>
					</form>
				</div>
         {/* <!-- /.form-wrapper --> */}
			</div> 
  )
}

export default Login