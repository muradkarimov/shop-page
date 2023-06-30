import React from 'react'
import './Order.scss'

function Order() {
  return (
    <>
      <div className="text__area">
        <div className="container ">
            <div className="text">
                <h2>Order Tracking</h2>
                <p>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
            </div>
        </div>
      </div>


      <div className="order__container">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="order__info">
                        <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                    </div>
                    <form className="row order__form">
                        <div className="col-lg-12">
                            <input type="text" placeholder='Order ID'/>
                        </div>
                        <div className="col-lg-12">
                            <input type="text" placeholder='Billing Email Address'/>
                        </div>
                        <div className="col-lg-12">
                            <button type='submit'>TRACK ORDER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Order
