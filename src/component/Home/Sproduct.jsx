import React from 'react'
import SPRODUCTS from './Sproducts';
// import { Products } from '../Products';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../Shop';


function Sproduct() {
  const navigate=useNavigate()
    return ( <div>
        


        <div className='sproduct'>
          {SPRODUCTS.map((item)=>{
            return(
                  
                <div className='sprod'>
                 <img onClick={()=>navigate('prd')}  className='simage' src={item.image} alt="" />
                </div>

            )
          })}
        </div>
    </div> );
}

export default Sproduct;