import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <>
      
  <footer className="">
    <div className="row">
      <div className="col-lg-2 col-md-6 mb-3">
        <h5>Top Products</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Managed Website</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Manage Reputation</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Power Tools</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Marketing Service</a></li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-6 mb-3">
        <h5>Quick Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Jobs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Brand Assets</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Investor Relations</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms of Service</a></li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-6 mb-3">
        <h5>Quick Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Jobs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Brand Assets</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Investor Relations</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms of Service</a></li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-6 mb-3">
        <h5>Resources</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Guides</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Research</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Experts</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Agencies</a></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-12  mb-3 ">
        <form>
          <h5>Newsletter</h5>
          <p>You can trust us, we only send promo offers.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2 form">
            {/* <label for="newsletter1" className="visually-hidden"></label> */}
            <input id="newsletter1" type="text" className="form-control" placeholder="Your Email address:"/>
            <button type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="row mt-3">
        <div className="col-lg-8 d-flex align-items-center justify-content-center">
            <span>&copy; 2022 Company, Inc. All rights reserved.</span>
        </div>
        <div className="col-lg-4 mt-2 d-flex align-items-center justify-content-center">
            <ul className="list-unstyled d-flex medias">
        <li className="ms-3"><a className="link-dark" href="#"><i className='bi bi-facebook'></i></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><i className='bi bi-twitter'></i></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><i className='bi bi-dribbble'></i></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><i className='bi bi-behance'></i></a></li>
      </ul>
        </div>
    </div>

    {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      </ul>
    </div> */}
  </footer>

    </>
  )
}

export default Footer
