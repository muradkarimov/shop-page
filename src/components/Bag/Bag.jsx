import React, { useContext } from 'react'
import './Bag.scss'
import { ShopContext } from '../Contexts/ShopContext'
import { useState } from 'react';

function Bag() {
    const{addedProduct}=useContext(ShopContext);
    const [count,setCount]=useState(1);
    const productPrice = 30 *count;
  return (
    <>
    {
        addedProduct.length>0 ?  <div className='bag__container'>
        <div className="container">
            <div className="row">
                <div className='d-flex align-items-center justify-content-center mb-4'><h2>Your Bag</h2></div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="bag__img">
                                <img src="https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="bag__details">
                                <div className='bag__title'>
                                    <h3><strong>Product:</strong>rIphone</h3>
                                    <h4><strong>Id:</strong> 9292112</h4>
                                    <h5><strong>Size:</strong> M</h5>
                                </div>
                                <div className='bag__number'>
                                    <div>
                                        <button className='btn btn-outline-danger' onClick={()=> setCount(count-1)}>-</button>
                                        <span>{count}</span>
                                        <button className='btn btn-outline-success' onClick={()=> setCount(count+1)}>+</button>
                                    </div>
                                    <div className='bag__price'>
                                        <p>${productPrice}</p>
                                    </div>
                                    <div className='bag__remove'>
                                        <button>Remove item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="summary">
                        <h3>Order Summary</h3>
                        <div className="prices">
                            <div className="d-flex justify-content-between pb-3 "><span>Subtotal</span><span className='span2'>$250</span></div>
                            <div className="d-flex justify-content-between pb-3 pt-2"><span>Shopping Estimate</span><span className='span2'>$250</span></div>
                            <div className="d-flex justify-content-between pb-3 pt-2"><span>Tax Estimate</span><span className='span2'>$250</span></div>
                            <div className="d-flex justify-content-between pb-3 pt-2"><span>Total</span><span className='span2'>$250</span></div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'><button className='check'><a href="#!">Checkout</a></button></div>
                    </div>
                </div>
            </div>
        </div>
      </div> : <h1>Your Bag is Empty</h1>
    }
      {/* <div className='bag__container'>
        <div className="container">
            <div className="row">
                <div className='d-flex align-items-center justify-content-center mb-4'><h2>Your Bag</h2></div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="bag__img">
                                <img src="https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="bag__details">
                                <div className='bag__title'>
                                    <h3><strong>Product:</strong>rIphone</h3>
                                    <h4><strong>Id:</strong> 9292112</h4>
                                    <h5><strong>Size:</strong> M</h5>
                                </div>
                                <div className='bag__number'>
                                    <div>
                                        <button className='btn btn-outline-danger'>-</button>
                                        <span>6</span>
                                        <button className='btn btn-outline-success'>+</button>
                                    </div>
                                    <div className='bag__price'>
                                        <p>$30</p>
                                    </div>
                                    <div className='bag__remove'>
                                        <button>Remove item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="summary">
                        <h3>Order Summary</h3>
                        <div className="prices">
                            <div className="d-flex justify-content-between pb-3 "><span>Subtotal</span><span className='span2'>$250</span></div>
                            <div className="d-flex justify-content-between pb-3 pt-2"><span>Shopping Estimate</span><span className='span2'>$250</span></div>
                            <div className="d-flex justify-content-between pb-3 pt-2"><span>Tax Estimate</span><span className='span2'>$250</span></div>
                            <div className="d-flex justify-content-between pb-3 pt-2"><span>Total</span><span className='span2'>$250</span></div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'><button className='check'><a href="#!">Checkout</a></button></div>
                    </div>
                </div>
            </div>
        </div>
      </div> */}
    </>
  )
}

export default Bag
