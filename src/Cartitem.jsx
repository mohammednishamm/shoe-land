import React, { useContext } from 'react'
import { Shopcontext } from './Shopcontext'

export const Cartitem = (props) => {
    const {id,productimg,productbrand,productname,color,productprice}=props.data
    const {cartitems,addToCart,removeFromCart,deleteCart}=useContext(Shopcontext);
  return (
    <div className='carting'>
    <img className='cartimage' src={productimg} alt="" />
    <div className='sayyan'>
    <h4 className='gil'>{productbrand}</h4>
    <span className='cartname'>{productname}</span>
    <span>Color: {color}</span>
    
    </div>
    <div  className='vim'>
      <button onClick={()=>addToCart(id)} className='saybtn'>+</button>
      <span className='vti'>{cartitems[id]}</span>
      <button onClick={()=>removeFromCart(id)} className='saybtn'>-</button>
    </div>
    <span className='jji'>${cartitems[id]  *  productprice}.00
    </span>
    <div><img onClick={()=>deleteCart(id)} className='sayimg' src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" /></div>
    </div>
    
  )
}
