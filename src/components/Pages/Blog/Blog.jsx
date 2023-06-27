import React from 'react'
import './Blog.scss'

function Blog(props) {
    const{img} = props;
  return (
    <>
 


 <div className="blog__part">
                        <div className="blog__part__img">
                            <img src={img} alt="" />
                            <a href="#!" className="blog__part__date">
                                <h3>15</h3>
                                <p>Jan</p>
                            </a>
                        </div>
                        <div className="blog__details">
                            <a href="" className='d-inline-block'>
                                <h2>Google inks pact for new 35-storey office</h2>
                            </a>
                            <p>
                            That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.
                            </p>
                            <ul>
                                <li className='content'>
                                    <a href="">
                                    <i class = "bx bx-user"></i>
                                    Travel, Lifestyle
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                    <i class = "bx bx-comment"></i>
                                    03 Comments
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
    </>
  )
}

export default Blog
