import React from 'react'
import './FeaturedProducts.scss'


function FeaturedProducts(props) {
    const{img,name,per} = props;
  return (
    <>
      <div className={`col-lg-${per} col-md-6 text-center  product`}>
        <div className='img__area'>
            <img src={img} alt="" className='w-100 img-fluid'/>
            <div className='img__icon'>
                <a href="">
                    <i className='bi bi-eye'></i>
                </a>
                <a href="">
                    <i className='bi bi-heart'></i>
                </a>
                <a href="">
                    <i className='bi bi-cart-dash'></i>
                </a>
            </div>
        </div>
        <div className="product__info">
            <a href="">
                <h4>{name}</h4>
            </a>
            <div className='mt-3'>
                <span className='me-4'>$25.00</span>
                <del>$35.00</del>
            </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProducts
