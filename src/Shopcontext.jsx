import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import PRODUCTS from './component/Data';


export const Shopcontext=createContext(null);
const getLocalCartData=()=>{
  const newCartData = localStorage.getItem('cartitems');
  return newCartData ? JSON.parse(newCartData):{};
}

  const getdefaultcart=()=>{
    let cart=getLocalCartData();
    for(let i=1 ;i<PRODUCTS.length+1;i++){
      
      cart[i]=cart[i]
    }
    return cart;
  }



  
export const Shopcontextprovider = (props) => {

  const [cartitems,setCartitems]=useState(getdefaultcart());

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartitems){
        if(cartitems[item]>0){
            let itemInfo=PRODUCTS.find((product)=>product.id === Number(item));
            totalAmount += cartitems[item] * itemInfo.productprice;
        }
    }
    return totalAmount;
  }


  const addToCart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid] + 1}))
  };
  const removeFromCart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid] - 1}))
  }
  const deleteCart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid]-prev[itemid]}))
  }
  useEffect(()=>{
    localStorage.setItem('cartitems',JSON.stringify(cartitems));
  },[cartitems])


  const contextValue={cartitems,addToCart,removeFromCart,deleteCart,getTotalCartAmount}




  return (
    <Shopcontext.Provider value={contextValue}>{props.children}</Shopcontext.Provider>
  )
}



