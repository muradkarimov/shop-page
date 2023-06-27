import React, { useState } from 'react'
import './Home.scss'
import Features from '../../Features/Features'
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts'
import LatestBlog from '../../LatestBlog/LatestBlog'
import { useEffect } from 'react'

function Home() {
    const features=[
        {icon:"icofont-money-bag",
        title:"MONEY BACK GUARANTEE",
        description:"Shall open divede a one"},
        {
            icon:"icofont-tow-truck",
            title:"FREE DELIVERY",
            description:"Shall open divede a one"
        },
        {icon:"icofont-live-support",
        title:"ALWAYS SUPPORT",
        description:"Shall open divede a one"},
        {
            icon:"fa-brands fa-hive",
            title:"SECURE PAYMENT",
            description:"Shall open divede a one"
        }
]
// const [featuredProducts, setFeaturedProducts] = useState([]);

// useEffect(() => {
//   fetch("https://cedar-eight-hydrogen.glitch.me")
//       .then(r => r.json())
//       .then(data => setFeaturedProducts(data));
      
// }, []);



const featuredProducts =[
  {
    id:"1",
    img:"https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp",
    name:"LATEST MEN'S SNEAKER",
    category:"Shoes",
    brand:"NewYorker",
    price:"$30",
    star:"4.1"
  },
  {
    id:"2",
    img:"https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-2.jpg.webp",
    name:"RED WOMEN PURSES",
    category:"Backpacks",
    brand:"Zara",
    price:"$70",
    star:"4.3"
  },
  {
    id:"3",
    img:"https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-3.jpg.webp",
    name:"MEN STYLISH SMART WATCH",
    category:"Watches",
    brand:"Pull&Bear",
    price:"$54",
    star:"4.0"
  },
  {
    id:"4",
    img:"https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp",
    name:"NIKE LATEST SNEAKER",
    category:"Shoes",
    brand:"LC Waikiki",
    price:"$20",
    star:"3.6"
  },
  {
    id:"5",
    img:"https://preview.colorlib.com/theme/eiser/img/product/new-product/n2.jpg.webp",
    name:"MEN'S DENIM JEANS",
    category:"Jeans",
    brand:"Pull&Bear",
    price:"$150",
    star:"4.4"
  },
  {
    id:"6",
    img:"https://preview.colorlib.com/theme/eiser/img/product/new-product/n3.jpg.webp",
    name:"MEN'S LATEST JEANS",
    category:"Jeans",
    brand:"NewYorker",
    price:"$30",
    star:"4.1"
  },
  {
    id:"7",
    img:"https://preview.colorlib.com/theme/eiser/img/product/new-product/n4.jpg.webp",
    name:"ADIDAS SPORT SHOE",
    category:"Shoes",
    brand:"Zara",
    price:"$100",
    star:"4.3"
  },
  {
    id:"8",
    img:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i7.jpg.webp",
    name:"WOMEN'S BAG",
    category:"Backpacks",
    brand:"Pull&Bear",
    price:"$48",
    star:"4.2"
  },
  {
    id:"9",
    img:"https://ciseco-reactjs.vercel.app/static/media/17.7701cf9446a6b588de67.png",
    name:"RAY NYLON BACKPACK",
    category:"Backpacks",
    brand:"Polo",
    price:"$400",
    star:"4.4"
  },
  {
    id:"10",
    img:"https://ciseco-reactjs.vercel.app/static/media/2.0fda32f45e4cd5e368ea.png",
    name:"ROUND BACKLE BELT",
    category:"New Arrivals",
    brand:"LC Waikiki",
    price:"$250",
    star:"4.1"
  },
  {
    id:"11",
    img:"https://ciseco-reactjs.vercel.app/static/media/16.5ed8bd8a65af67fd6c5c.png",
    name:"WAFFLE KNIT BEANIE",
    category:"New Arrivals",
    brand:"NewYorker",
    price:"$180",
    star:"4.5"
  },
  {
    id:"12",
    img:"https://ciseco-reactjs.vercel.app/static/media/4.7342ded3cf1426f3ce5e.png",
    name:"TRAVEL PET CARRIER",
    category:"New Arrivals",
    brand:"Zara",
    price:"$30",
    star:"4.1"
  },
  {
    id:"13",
    img:"https://ciseco-reactjs.vercel.app/static/media/5.9ddc0dff360795c6f5b5.png",
    name:"LEATHET GLOVES",
    category:"New Arrivals",
    brand:"Polo",
    price:"$120",
    star:"4.6"
  },
  {
    id:"14",
    img:"https://ciseco-reactjs.vercel.app/static/media/6.ed4616e785835c927ad1.png",
    name:"HOODIE SWEATSHIRT",
    category:"New Arrivals",
    brand:"LC Waikiki",
    price:"$50",
    star:"4.4"
  },
  {
    id:"15",
    img:"https://ciseco-reactjs.vercel.app/static/media/9.838d27ae66ef44d4a73b.png",
    name:"WOOL CASHMARE JACHKET",
    category:"Jeans",
    brand:"Zara",
    price:"$40",
    star:"4.1"
  },
  {
    id:"16",
    img:"https://ciseco-reactjs.vercel.app/static/media/8.cb062df1bb925627f03d.png",
    name:"ELLA LEATHER TOTE",
    category:"New Arrivals",
    brand:"NewYorker",
    price:"$70",
    star:"4.7"
  }
]

const latestBlog = [
  {
    img:"https://preview.colorlib.com/theme/eiser/img/b1.jpg.webp"
  },
  {
    img:"https://preview.colorlib.com/theme/eiser/img/b2.jpg.webp"
  },
  {
    img:"https://preview.colorlib.com/theme/eiser/img/b3.jpg.webp"
  }
]
// const{featuredProducts, setFeaturedProduects} = useState([]);

console.log(featuredProducts)

// useEffect(() => {
//   fetch("https://cedar-eight-hydrogen.glitch.me/shop")
//       .then(r => r.json())
//       .then(data => setFeaturedProduects(data));
// }, []);

const slicedFeaturedProducts1 = featuredProducts.slice(0,3)
const slicedFeaturedProducts2 = featuredProducts.slice(3,5)
const slicedFeaturedProducts3 = featuredProducts.slice(5,7)
const slicedFeaturedProducts4 = featuredProducts.slice(0,8)

  return (
    <>
      <div className='home__container'>
        <div className="container">
            <div className="home__text row">
                <div className="col-lg-12">
                    <p>MEN COLLECTION</p>
                    <h3>
                        <span className='span'>Show</span> <span>Your</span>
                        <br />
                        <span>Personel</span> <span className='span'>Style</span>
                    </h3>
                    <h4>
                        Fowl saw a dry which is a above together place.
                    </h4>
                    <a href="#!">
                        VIEW COLLECTION
                    </a>
                </div>
            </div>
        </div>
      </div>

      <div className="container mb-70">
        <div className="row">
               {
                features.map(i => <Features icon={i.icon} title={i.title} description={i.description}/>)
               }
          </div>
      </div>

      <div className="product__container mb-70">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center mb-70">
            <div className="col-lg-12 text-center position-relative">
              <h2>FEATURED PRODUCT</h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
          </div>
          <div className="row">
            
          {
                
                slicedFeaturedProducts1.map(i => <FeaturedProducts per={4} img={i.img} name={i.name}/>)
               
          }
          </div>
        </div>
      </div>


      <div className="offer mb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="offset-lg-4 col-lg-6 text-center">
              <div className="offer_area">
                <h3>ALL MEN'S COLLECTION</h3>
                <h2>50% OFF</h2>
                <a href="">Discover Now</a>
                <p>Limited time offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="product__container">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-center position-relative mb-70">
              <h2>NEW PRODUCTS</h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="new__product">
                <h5>COLLECTION OF 2019</h5>
                <h3>MEN'S SUMMER T-SHIRT</h3>
                <div className="img">
                  <img src="https://preview.colorlib.com/theme/eiser/img/product/new-product/new-product1.png.webp" alt="" className='w-100 img-fluid'/>
                </div>
                <h4>$120.70</h4>
                <a href="">ADD TO CART</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row margin__top">
                {
                
                slicedFeaturedProducts2.map(i => <FeaturedProducts per = {6} img={i.img} name={i.name}/>)
               }
                 {
                
                slicedFeaturedProducts3.map(i => <FeaturedProducts per = {6} img={i.img} name={i.name}/>)
               }
               
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="product__container">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-center position-relative mb-70">
              <h2>INSPIRED PRODUCTS</h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
          </div>


          <div className="row ">
            {
              slicedFeaturedProducts4.map(i => <FeaturedProducts per = {3} img={i.img} name={i.name} /> )
            }
          </div>
        </div>
      </div>


      <div className="product__container">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-center position-relative mb-70">
              <h2>LATEST BLOG</h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
          </div>

          <div className="row">
          {
              latestBlog.map(i => <LatestBlog  img={i.img} /> )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
