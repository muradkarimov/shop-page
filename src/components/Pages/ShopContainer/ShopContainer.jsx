import React, { useContext } from 'react'
import './ShopContainer.scss'
import ShopProducts from '../ShopProducts/ShopProducts'
import { ShopContext } from '../../Contexts/ShopContext';


function ShopContainer() {
    const{featuredProducts} = useContext(ShopContext);
    const shop__category =[
        {
            title:"Browse Category",
            type1:"New Arrivals",
            type2:"Backpacks",
            type3:"Watches",
            type4:"Shoes",
            type5:"Jeans"
        },
        {
            title:"Product Brand",
            type1:"NewYorker",
            type2:"Zara",
            type3:"Pull&Bear",
            type4:"LC Waikiki",
            type5:"Polo"
        },
        {
            title:"Color Filter",
            type1:"White",
            type2:"Black",
            type3:"Green",
            type4:"Red",
            type5:"Yellow"
        }
    ]
  return (
    <>
       <div className="text__area">
        <div className="container ">
            <div className="text">
                <h2>SHOP PRODUCTS</h2>
                <p>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
            </div>
        </div>
      </div>



    <div className="shop__products__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
           {
            shop__category.map(i => <ShopProducts title={i.title} type1={i.type1} type2={i.type2} type3={i.type3} type4={i.type4} type5={i.type5}/>)
           }
            </div>


            <div className="col-lg-9">
                <div className="product">
                    <div className="product__img__area">
                        <div className="product__image">
                            <img src="" alt="" />
                        </div>
                        <button><i className='bi bi-heart'></i></button>
                    </div>
                    <div className="product__details__area">
                        <div className="color__part">
                            <div className="colors">
                                <div className="color violet"></div>
                            </div>
                            <div className="colors">
                                <div className="color yellow"></div>
                            </div>
                            <div className="colors">
                                <div className="color orange"></div>
                            </div>
                            <div className="colors">
                                <div className="color blue"></div>
                            </div>
                            <div className="colors">
                                <div className="color green"></div>
                            </div>
                            
                        </div>
                        <div className="product__title">
                            <h2></h2>
                            <p></p>
                        </div>
                        <div className="product__details">
                            <div>
                                <div className="product__price">
                                    <span></span>
                                </div>
                            </div>
                            <div className="product__star">
                            <i class = "bx bx-star"></i>
                            <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
          </div>
        </div>
    </div>
    </>
  )
}

export default ShopContainer
