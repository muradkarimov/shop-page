import React from 'react'
import './Features.scss'

function Features(props) {

    const{icon,title,description} = props;

  return (
    <>
    <div className="col-lg-3 col-md-6">
    <div className='feature__container '>
        <a href="#!">
            <i className={`${icon}`}></i>
        </a>
        <h3>{title}</h3>
        <p>{description}</p>
     </div>
    </div>
     
    </>
  )
}

export default Features
