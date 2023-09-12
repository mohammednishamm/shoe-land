import React, { useContext, useState } from 'react'
import { Shopcontext } from './Shopcontext'
import PRODUCTS from './component/Data'
import { Cartitem } from './Cartitem'

export const Cart = () => {

    const {cartitems,getTotalCartAmount}=useContext(Shopcontext);
    const totalAmount=getTotalCartAmount();
    const deliveryAmount=totalAmount+40;
    const [pop,setPop]=useState(false);


    const popup=()=>{
      setPop(!pop);
    }
  return (
    <div className='kerala'>
      
        {PRODUCTS.map((product)=>{
            if(cartitems[product.id] !== 0){
              

                return(


              
                   <div className='mint1'>
                   <div className='cart1'><Cartitem data={product}/></div>

                   
                  
                  
                  
                  
                  
                    </div>
                    

                )
            }
        })}
{totalAmount>0?
<div className='bill'>
  <div className='vara'></div>
                    <h5>Order Summary </h5>
                    <div className='like lik1'><span className='like2'>Subtotal</span><span className='like2'>${totalAmount}.00</span></div>
                    <div className='like'><span className='like2'>Delivery</span><span className='like2'>{totalAmount > 1000 ? <><span>FREE</span></>: <><span>$40.00</span></>}</span></div>
                    <div className='like lik2'><span className='like2'>Total</span><span className='like2'>${totalAmount>1000?<><span>{totalAmount}</span></>:<><span>{deliveryAmount}</span></>}.00</span></div>
                    <button className='akhil9' onClick={popup}>Checkout</button>
                    </div>: <div><img className='empty' src="https://cdn-icons-png.flaticon.com/128/10967/10967115.png" alt="" /></div>}


                    {pop && (

                      <div className='jil'>
                            <div class="checkout-container">
        <h1>Checkout</h1><span className='limit' onClick={popup}>close</span>
        <form id="checkout-form">
            <fieldset>
                <legend>Billing Information</legend>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" required/>
                </div>
            </fieldset>

            <fieldset className='lookat'>
                <legend>Shipping Information</legend>
                <div className="form-group">
                    <label for="shipping-address">Shipping Address</label>
                    <input type="text" id="shipping-address" name="shipping-address" required/>
                </div>
            </fieldset>

           
            <div className="cart">
                <h2>Cart Summary</h2>
                <ul id="cart-items">
                </ul>
                <p>Total Price: $<span id="total-price">{totalAmount>1000?<><span>{totalAmount}</span></>:<><span>{deliveryAmount}</span></>}</span></p>
            </div>

            <button type="submit">Place Order</button>
        </form>
    </div>

                      </div>

                    )}
</div>
  )
}
