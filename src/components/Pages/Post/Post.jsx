import React from 'react'
import './Post.scss'

function Post(props) {
    const{img, detail, date} = props;
  return (
    <>
      
        
        <div className="post__items m_top">
            <img src={img} alt="" />
            <div className="post__details">
                <a href="">
                    <h3>{detail}</h3>
                </a>
                <p>{date}</p>
            </div>
        </div>
      
    </>
  )
}

export default Post

