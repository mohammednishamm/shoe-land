import React, { useState } from 'react'
import Validation from './Validation'

function Login() {
    const [values,setValues]=useState({
        name:" ",
        password:" "
    })
  const [errors,setErrors]=useState({

  })


    function handleChange(e){
        setValues({...values,[e.target.name]: e.target.value})
    }
function handlesubmit(){
    e.preventDefault();
   setErrors(validation(values));
}

    return ( 
        <>
        <div>
            <form onSubmit={handlesubmit}>
            <h1>login</h1>
            <input type='text' placeholder='enter your name' value={values.name} name="name" onChange={handleChange}/>
            {errors.name && <p>{errors.name}</p>}
            <input type='password' placeholder='enter password' value={values.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}

            <button>login</button>
            
            </form> 
        </div>
        </>
     );
}

export default Login;