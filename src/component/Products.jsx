import React from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { More } from '../More';
import PRODUCTS from './Data';
// import { More } from '../More';


export const Products = (props) => {



  const {id,productprice,productbrand,productname,category,color,productimg,originalprice,offerpercentage,productdescription1,productdescription2,productdescription3,productdescription4,productdescription5,image2,image3,image4,image5}=props.data;
  const productClassName = `product${id}`;
  

  return (
    <div className="prd11">
      <div className='image-container'>
    <div> <img className='shoeimg' src={productimg} alt="" /><img className='mom' src={image2} alt="" /> </div>
      <div class="caption9">
          quick view
        </div>
      </div>
     
      <span className='brand'>{productbrand}</span>
      {/* <span className='name'>{productname}</span> */}
     <div className='price'> <span className='offerprice'>${productprice}</span>
     {/* <span className='originalprice'>${originalprice}</span><span className='percentage'>{offerpercentage}</span> */}
     </div>
     <Link to='/mor' state={{ selectedProduct: props.data }}>
 <div className='mis'> <button className='btn1' >More info</button></div>
</Link>


       

    </div> )


}
