import React, { useContext } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Contexts/ShopContext'

function Navbar() {
  const {addedProduct} = useContext(ShopContext);
  console.log(addedProduct)
  return (
    
    <>
<nav className="navbar navbar-expand-lg " aria-label="Fifth navbar example">
    <div className="container-fluid w-100">
    <div>
        <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" className='nav__logo'/>
     </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        {/* <span className="navbar-toggler-icon"></span> */}
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>

    <div className="collapse navbar-collapse navbar__right " id="navbarsExample05">
   
    <div>
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link className="nav-link " to="">HOME</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown" aria-expanded="false">SHOP</a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item " to="/ShopContainer">SHOP PRODUCTS</Link></li>
              <li><a className="dropdown-item" href="#">PRODUCT DETAILS</a></li>
              <li><a className="dropdown-item" href="#">PRODUCT CHECKOUT</a></li>
              <li><a className="dropdown-item" href="#">SHOPPING CART</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">BLOG</a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/BlogContainer">BLOG</Link></li>
              <li><a className="dropdown-item" href="#">BLOG DETAILS</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">PAGES</a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/Order">TRACKING</Link></li>
              <li><a className="dropdown-item" href="#">ELEMENTS</a></li>
            </ul>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link " to='/Contact'>CONTACT</Link>
          </li>
        </ul>
    </div>
        <div>
        <i className='bi bi-search'></i>
        <i className='fa-regular fa-user'></i>
        {/* <i className='fa-solid fa-cart-shopping'>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
          {addedProduct > 0 && addedProduct}
        </span>
        </i> */}
        <button type="button" class="position-relative cart">
          <Link to="/Bag"><i className='fa-solid fa-cart-shopping'></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {addedProduct.length > 0 && addedProduct.length}
          </span></Link>
        </button>
        {/* <i className='bi bi-heart'></i> */}
     </div>
     
     </div>
    


    </div>
  </nav>

    </>
  )
}

export default Navbar
