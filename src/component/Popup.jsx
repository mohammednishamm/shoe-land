import React from 'react'
const [modal,setModal]=useState(false);
 
const toggleModl =() =>{
  setModal(!modal);
}

export const Popup = () => {
  return (
    <div>Popup</div>
  )
}
