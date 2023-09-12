import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Shopcontext } from './Shopcontext';
import PRODUCTS from './component/Data';
import {Link, useNavigate } from 'react-router-dom';

export const More = (props) => {
  
  const {cartitems,addToCart}=useContext(Shopcontext);
  const location = useLocation();
  const navigate=useNavigate();
 


  const selectedProduct = location.state.selectedProduct;
  const niham=selectedProduct.id
 const [image,setimage]=useState(selectedProduct.productimg);
 const cartItemAmount=cartitems[niham];

  if (!selectedProduct) {
    return <div>No product selected</div>;
  }

  return (
    <>
    <div className='more1'>
      <div className='mooor'>
      <img className='moreimg' src={image} alt="" />
      <div className='more5'>
      <span className='morebrand'>{selectedProduct.productbrand}</span>
      <span className='morename'>{selectedProduct.productname}</span>
      <div className='moreprice'> <span className='moreoffer'>${selectedProduct.productprice}.00</span>
      </div>
      <span className='size'>Size</span>
      <select className='akhil' name="nisham" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
      </select>
      <span className='akhil3'>Color: {selectedProduct.color}</span>
      <span className='akhil3'>Quantity</span>
      <span className='akhil31 akhil8'>{cartItemAmount}</span>
    
    
    

     
      <button className='akhil1' onClick={()=>addToCart(niham)}>Add to cart</button>
      <button className='akhil2'>Buy Now</button>
      

      </div>

    </div>
    <div className='num2'>
    <img className='num1' onClick={()=>setimage(selectedProduct.image2)} src={selectedProduct.image2} alt="" />
     
      <img className='num1' onClick={()=>setimage(selectedProduct.productimg)} src={selectedProduct.productimg} alt="" />
      </div>
    </div>
      <div className='thu'>
        {PRODUCTS.map((product)=>{
          if(product.category === selectedProduct.category){
            return(<div>
                  <div className="prd11">
      <div className='image-container'>
    <div> <img className='shoeimg' src={product.productimg} alt="" /><img className='mom' src={product.image2} alt="" /> </div>
      <div class="caption9">
          quick view
        </div>
      </div>
     
      <span className='brand'>{product.productbrand}</span>
     <div className='price'> <span className='offerprice'>${product.productprice}</span>
     </div>
     {/* <Link to='/mor'   >
 <div className='mis'> <button className='btn1' >More info</button></div>
</Link> */}


       

    </div>
              
            </div>)
          }
        })}

      </div>
    </>
  );
}