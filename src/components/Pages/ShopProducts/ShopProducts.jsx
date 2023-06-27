import React from 'react'
import './ShopProducts.scss'
import { useState } from 'react';

function ShopProducts(props) {
  const{title, type1, type2, type3, type4, type5} = props;
  const [isTrue, setIsTrue]= useState(false);
  const [isTrue1, setIsTrue1]= useState(false);
  const [isTrue2 ,setIsTrue2]= useState(false);
  const [isTrue3, setIsTrue3]= useState(false);
  const [isTrue4, setIsTrue4]= useState(false);
  


  return (
   

    <>
       <div className="left__part browse__category">
              <div className="title">
                <h3>{title}</h3>
              </div>
              <div className="category__details">
                <ul>
                  <li><a href="#!"  onClick={()=> setIsTrue(!isTrue)}><button className='btn'><i className= {`bx bx-radio-circle${isTrue ? "-marked":""}`}></i>{type1}</button></a></li>
                  <li><a href="#!" onClick={()=> setIsTrue1(!isTrue1)}><button className='btn'><i class = {`bx bx-radio-circle${isTrue1 ? "-marked":""}`}></i>{type2}</button></a></li>
                  <li><a href="#!" onClick={()=> setIsTrue2(!isTrue2)}><button className='btn'><i class = {`bx bx-radio-circle${isTrue2 ? "-marked":""}`}></i>{type3}</button></a></li>
                  <li><a href="#!"onClick={()=> setIsTrue3(!isTrue3)}><button className='btn'><i class = {`bx bx-radio-circle${isTrue3 ? "-marked":""}`}></i>{type4}</button></a></li>
                  <li><a href="#!" onClick={()=> setIsTrue4(!isTrue4)}><button className='btn'><i class = {`bx bx-radio-circle${isTrue4 ? "-marked":""}`}></i>{type5}</button></a></li>
                  
                  {/* <li>
                    <a href="">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                        {type1}
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label class="form-check-label" for="flexRadioDefault2">
                        {type2}
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                        <label class="form-check-label" for="flexRadioDefault3">
                        {type3}
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                        <label class="form-check-label" for="flexRadioDefault4">
                        {type4}
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
                        <label class="form-check-label" for="flexRadioDefault5">
                        {type5}
                        </label>
                      </div>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

     
    </>
  )
}

export default ShopProducts
