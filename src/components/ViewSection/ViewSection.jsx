import React, { useContext, useEffect, useState } from 'react'
import './ViewSection.scss'
import { ShopContext } from '../Contexts/ShopContext'
import {  useParams } from 'react-router-dom';

function ViewSection() {
    const {featuredProducts, findProduct, removeFromBag, addToBag} = useContext(ShopContext);
    const params = useParams();
    const id = params.id;
    const [product,setProduct] = useState({
        img:"",
        name:"",
        price:"",
        star:""
    });

    useEffect (()=>{
        setProduct(findProduct(id));
    },[findProduct, id]);

    const [list, setList] = useState(false);
    const handleAddedProduct = () => {
        list ? removeFromBag(id): addToBag(id) 
        setList(!list);
      }


  return (
    <>
      <div className="view__section__container">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="view__img">
                        <img src={product.img} alt="" />
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="view__title">
                        <h2>{product.name}</h2>
                        <div className='d-flex align-items-center'>
                            <div className="view__price">
                                <span>{product.price}</span>
                            </div>
                            <div className='seperator'></div>
                            <div className="view__star d-flex align-items-center">
                                <a href="">
                                <i class = "bx bx-star"></i>
                                <div className='m_left d-flex'>
                                    <span>{product.star}</span>
                                    <span className='point'>·</span>
                                    <span className='span1'>152 Comments</span>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="size__section">
                        <div>
                            <label htmlFor="">
                                <span>Size:</span>
                            </label>
                        </div>
                        <div className='sizes'>
                            <button className='size'>XS</button>
                            <button className='size'>S</button>
                            <button className='size'>M</button>
                            <button className='size'>L</button>
                            <button className='size'>XL</button>
                            <button className='size'>2XL</button>
                        </div>
                        <div className='m_top'>
                            <button className='add_bag' onClick={handleAddedProduct}><a href="#!"><i class = "bi bi-bag-check"></i><span>{!list ? "Add to bag":"Remove from bag"}</span></a></button>
                        </div>
                        <hr />
                        <div class="accordion m_top" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Description
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Fabric + Care
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
            <li>Made from a sheer Belgian power micromesh.</li>
            <li>74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
            <li>Adjustable hook & eye closure and straps</li>
            <li>Hand wash in cold water, dry flat</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       How it Fits
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       FAQ
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul>
        <li>All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.</li>
        <li>Please note, packs must be returned in full. We do not accept partial returns of packs.</li>
        <li>Want to know our full returns policies? Here you go.</li>
        <li>Want more info about shipping, materials or care instructions? Here!</li>
      </ul>
      </div>
    </div>
  </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-12">
                    <div className='m_top2'>
                        <h2>Product Details</h2>
                        <div>
                            <p>The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.</p>
                            <p>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                            <ul>
                                <li>Regular fit, mid-weight t-shirt</li>
                                <li>Natural color, 100% premium combed organic cotton</li>
                                <li>Quality cotton grown without the use of herbicides or pesticides - GOTS certified</li>
                                <li>Soft touch water based printed in the USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ViewSection
