import React, { useContext } from 'react'
import './ShopContainer.scss'
import ShopProducts from '../ShopProducts/ShopProducts'
import { ShopContext } from '../../Contexts/ShopContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopCard from '../../ShopCard/ShopCard';


function ShopContainer() {
    const{featuredProducts, addToBag, removeFromBag} = useContext(ShopContext);
    const[paginationNumber,setPaginationNumber] = useState(1);
    const clothesPerPage = 6;
    const maxPage = Math.ceil(featuredProducts.length/clothesPerPage);
    const buttons = [];
for (let i = 1; i <= maxPage; ++i) {
  buttons.push(
      <button key={i} disabled={paginationNumber === i} onClick={() => setPaginationNumber(i)} className={`${paginationNumber === i && "bg-primary text-white"} page-link`}>
          {i}
      </button>
  )
}
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
        }
        // {
        //     title:"Color Filter",
        //     type1:"White",
        //     type2:"Black",
        //     type3:"Green",
        //     type4:"Red",
        //     type5:"Yellow"
        // }
    ]

    const [list, setList] = useState(false);
    const id = featuredProducts.id;
    const handleAddedProduct = () => {
        list ? removeFromBag(id): addToBag(id) 
        setList(!list);
      }
  
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
                <div className="row">
                    {
                        featuredProducts.map(i=> 
                        <div className='col-lg-4 col-md-6'>
                            {/* <div className="product">
                                <div className="product__img__area">
                                    <div className="product__image">
                                       <img src={i.img} alt="" />
                                    </div>
                                    <button><i className='bi bi-heart'></i></button>
                                    <div className='additional__info'>
                                        <button className='adding bag' onClick={handleAddedProduct}><a href="#!"><i class = "bi bi-bag-check"></i><span>{!list ? "Add to bag":"Remove from bag"}</span></a></button>
                                        <button className='adding view'><Link to={`/ViewSection/${i.id}`} ><i class = "bi bi-arrows-fullscreen"></i><span>Quick view</span></Link></button>
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
                                        <h2>{i.name}</h2>
                                        <p>{i.brand}</p>
                                    </div>
                                    <div className="product__details">
                                <div>
                                    <div className="product__price">
                                        <span>{i.price}</span>
                                    </div>
                                </div>
                                <div className="product__star">
                                <i class = "bx bx-star"></i>
                                <span>{i.star}</span>
                                </div>
                                   </div>
                                </div>
                            </div> */
                            <ShopCard img={i.img} name={i.name} price={i.price} star={i.star} brand={i.brand} id={i.id} key={i.key}/>}
                        </div>).slice((paginationNumber-1)*clothesPerPage, paginationNumber*clothesPerPage)
                    }
                </div>

                <div className='d-flex justify-content-center align-items-center mt-2'>
                    <ul className="pagination">
                        <li>
                            <button className='page-link' onClick={() => setPaginationNumber(paginationNumber - 1)} disabled={paginationNumber===1}><i class = "bx bx-left-arrow"></i></button>
                            </li>
                            {
                              buttons
                            }
                            <li>
                            <button className='page-link' onClick={() => setPaginationNumber(paginationNumber + 1)} disabled={paginationNumber===maxPage}><i class = "bx bx-right-arrow"></i></button>
                        </li>
                    </ul>
                </div>



                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ShopContainer
