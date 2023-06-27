import React from 'react'
import './LatestBlog.scss'

function LatestBlog(props) {
    const {img}= props;
  return (
    <>
      <div className='col-lg-4'>
        <div className="latest__blog__container">
            <div className="img__area">
                <img src={img} alt="" className='img-fluid w-100'/>
            </div>
            <div className="details">
                <div className="top__part d-flex">
                    <a href="">By Admin</a>
                    <a href="">
                    <i class = "ri-chat-smile-2-line"></i>
                    <span>2 Comments</span>
                    </a>
                </div>
                <div className='middle__part1'>
                    <a href="">
                    Ford clever bed stops your sleeping partner hogging the whole
                    </a>
                </div>
                <div className="middle__part2">
                    <p>
                    Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.
                    </p>
                </div>
                <div className="bottom__part">
                    <a href="">Learn More 
                    <i className = "bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default LatestBlog
