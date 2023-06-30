import React from 'react'
import './ShopCard.scss'
import { useContext, useState } from 'react';
import { ShopContext } from '../Contexts/ShopContext';
import { Link } from 'react-router-dom';

function ShopCard(props) {
    const{img, name, price, brand,star, id} = props;
    const{featuredProducts, addToBag, removeFromBag} = useContext(ShopContext);
    const [list, setList] = useState(false);
    const handleAddedProduct = () => {
        list ? removeFromBag(id): addToBag(id) 
        setList(!list);
      }
  return (
    <>
      <div className="product">
                                <div className="product__img__area">
                                    <div className="product__image">
                                       <img src={img} alt="" />
                                    </div>
                                    {/* <button><i className='bi bi-heart'></i></button> */}
                                    <div className='additional__info'>
                                        <button className='adding bag' onClick={handleAddedProduct}><a href="#!"><i class = "bi bi-bag-check"></i><span>{!list ? "Add to bag":"Remove from bag"}</span></a></button>
                                        <button className='adding view'><Link to={`/ViewSection/${id}`} ><i class = "bi bi-arrows-fullscreen"></i><span>Quick view</span></Link></button>
                                    </div>
                                </div>
                                <div className="product__details__area">
                                    <div className="color__part">
                                        <div className="colors" >
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
                                        <h2>{name}</h2>
                                        <p>{brand}</p>
                                    </div>
                                    <div className="product__details">
                                <div>
                                    <div className="product__price">
                                        <span>{price}</span>
                                    </div>
                                </div>
                                <div className="product__star">
                                <i class = "bx bx-star"></i>
                                <span>{star}</span>
                                </div>
                                   </div>
                                </div>
                            </div>
    </>
  )
}

export default ShopCard
