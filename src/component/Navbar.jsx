import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Validate';
import img from '../component/images/close.png'



function Navbar() {
    const navigate=useNavigate();
    const [modal,setModal]=useState(false);
    const toogleModel = ()=>{
        setModal(!modal)
    }
    return ( <div>
        <div className="navbar">
            <a className="signin" href="" >SHOE LAND</a><img src={img} alt="" />
            <span onClick={()=>navigate('/')}  className="login8" >Home</span><img className='hii' onClick={()=>navigate('/')}  src="https://cdn-icons-png.flaticon.com/128/609/609803.png" alt="" />
         <Link className='noo' to='cor'><span className='login8'>Cart</span><img className='hii' src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png" alt="" /></Link>
         <span className='login8'  onClick={toogleModel} >Login</span>
         <span className='login8'>Signup</span>
        </div>

{modal && (

<div className='pop'> 
<span className='nnnn' onClick={toogleModel}>Close</span>
<Login/>
</div>


)}







    </div> );
}

export default Navbar;