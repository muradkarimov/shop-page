import React from 'react'
import Blog from '../Blog/Blog'
import './BlogContainer.scss'
import Post from '../Post/Post'

function BlogContainer() {
  const blog__image=[
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/main-blog/m-blog-1.jpg.webp"
    },
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/main-blog/m-blog-2.jpg.webp"
    },
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/main-blog/m-blog-3.jpg.webp"
    },
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/main-blog/m-blog-4.jpg.webp"
    },
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/main-blog/m-blog-5.jpg.webp"
    }
    
  ]

  const post__image = [
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/popular-post/post1.jpg.webp",
      detail:"From Life You Wish ...",
      date:"January 12, 2019"
    },
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/popular-post/post2.jpg.webp",
      detail:"The Amazing Hubble",
      date:"02 Hours ago"
    },
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/popular-post/post3.jpg.webp",
      detail:"Astronomy or Astrology",
      date:"03 Hours ago"
    },
    {
      img:"https://preview.colorlib.com/theme/eiser/img/blog/popular-post/post4.jpg.webp",
      detail:"Asteroids Telescope",
      date:"01 Hours ago"
    }
  ]



  return (
    <>
         <div className="text__area">
        <div className="container ">
            <div className="text">
                <h2>BLOG</h2>
                <p>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
            </div>
        </div>
      </div>


      <div className="blog__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            {
            blog__image.map(i => <Blog img={i.img}/>)
            }
            </div>


            <div className="col-lg-4">
              <div className="search">
                <form action="">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input type="text" placeholder='Search Keyword' />
                      <div className="input-group-append">
                      <button className="btn">
                      <i class = "bi bi-search"></i>
                      </button>
                    </div>
                    </div>
                    
                  </div>
                  <button className='submit'>Search</button>
                </form>
              </div>


              <div className="category">
                <h4>
                  Category
                </h4>
                <ul>
                  <li >
                    <a href="">
                      <p>Restaurant Food (37)</p>
                    </a>
                  </li>
                  <li className='p_top'>
                    <a href="">
                      <p>Travel News (10)</p>
                    </a>
                  </li>
                  <li className='p_top'>
                    <a href="">
                      <p>Modern Technology (03)</p>
                    </a>
                  </li>
                  <li className='p_top'>
                    <a href="">
                      <p>Product (11)</p>
                    </a>
                  </li>
                  <li className='p_top'>
                    <a href="">
                      <p>Inspiration (21)</p>
                    </a>
                  </li>
                  <li className='p_top'>
                    <a href="">
                      <p>Helath Care (09)</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="post__container">
              <h3 className="post__title">
            Recent Posts
            </h3>
              {
            post__image.map(i => <Post img={i.img} date={i.date} detail={i.detail}/>)
            }
              </div>


              <div className="cloud__container">
                <h4>Tag Clouds</h4>
                <ul>
                  <li><a href="">project</a></li>
                  <li><a href="">love</a></li>
                  <li><a href="">technology</a></li>
                  <li><a href="">travel</a></li>
                  <li><a href="">restaurant</a></li>
                  <li><a href="">life style</a></li>
                  <li><a href="">design</a></li>
                  <li><a href="">illustration</a></li>
                </ul>
              </div>

              <div className="instagram__feed__container">
                <h4>Instagram Feeds</h4>
                <ul>
                  <li><a href=""><img className='img-fluid' src="https://preview.colorlib.com/theme/eiser/img/instagram/widget-i1.png.webp" alt="" /></a></li>
                  <li><a href=""><img className='img-fluid' src="https://preview.colorlib.com/theme/eiser/img/instagram/widget-i2.png.webp" alt="" /></a></li>
                  <li><a href=""><img className='img-fluid' src="https://preview.colorlib.com/theme/eiser/img/instagram/widget-i3.png.webp" alt="" /></a></li>
                  <li><a href=""><img className='img-fluid' src="https://preview.colorlib.com/theme/eiser/img/instagram/widget-i4.png.webp" alt="" /></a></li>
                  <li><a href=""><img className='img-fluid' src="https://preview.colorlib.com/theme/eiser/img/instagram/widget-i5.png.webp" alt="" /></a></li>
                  <li><a href=""><img className='img-fluid' src="https://preview.colorlib.com/theme/eiser/img/instagram/widget-i6.png.webp" alt="" /></a></li>
                </ul>
              </div>

              <div className="newsletter__container">
                <h4>Newsletter</h4>
                <form action="">
                  <div className="form-group">
                    <input type="mail" placeholder='Enter email' />
                  </div>
                  <button className='submit'>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default BlogContainer
