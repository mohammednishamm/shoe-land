  import React, { useState } from 'react';
  import { Products } from './Products';
  import PRODUCTS from './Data';
import { useNavigate } from 'react-router-dom';

  export const Shop = () => {
    const navigate=useNavigate();
    const [searchterm, setSearchterm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [price,setPrice]=useState(null);
    // const [data,setData]=useState(null);
    const handleSearchChange = (event) => {
      setSearchterm(event.target.value);
    };

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
    const brandCategory = (brand)=>{
      setSelectedBrand(brand);
    };
    const priceRange=(price)=>{
      setPrice(price);
    }
  
    const filteredProducts = PRODUCTS.filter((product) =>
      product.productname.toLowerCase().includes(searchterm.toLowerCase())

    );

    


    const filteredByCategory = () => {
      let filtered = filteredProducts;
  
      
      if (selectedCategory) {
        filtered = filtered.filter((product) => product.category === selectedCategory);
      }
  
      if (selectedBrand) {
        filtered = filtered.filter((product) => product.categorybrand === selectedBrand);
      }
      if(price){
        filtered=filtered.filter((product)=>product.pricerange === price)
      }
      // if(data){
      //   filtered=filtered.filter((product)=> product===data)
      // }
  
      return filtered;
    };
    const clearproduct=()=>{
      setSelectedBrand(null);
      setSelectedCategory(null)
    }

    
          


    return (
      <div className='productt'>
        <div className='nav2'>
        <input
            className='search11'
            type="text"
            placeholder='search'
            value={searchterm}
            onChange={handleSearchChange}
          />
          <span className='button321 nikee' onClick={()=>navigate('/')}>Home</span>
          <div class="dropdown">
    <button  class="btn btn- dropdown- button321 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="\">
      Shop
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">  
      <li><a class="dropdown-item lithium" onClick={()=>brandCategory('Men')}>Men</a></li>
      <li><a class="dropdown-item lithium" href="#" onClick={()=>brandCategory('Women')}>Women</a></li>
      <li><a class="dropdown-item lithium" href="#" onClick={()=>brandCategory('allensolly')}>Children</a></li>
    </ul>
  </div>
               <div class="dropdown">
    <button  class="btn btn- dropdown- button321 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="\">
      Brand
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">  
      <li><a class="dropdown-item lithium" onClick={() => handleCategoryChange('nike')}>Nike</a></li>
      <li><a class="dropdown-item lithium" href="#" onClick={() => handleCategoryChange('adidas')}>Adidas</a></li>
      <li><a class="dropdown-item lithium" href="#" onClick={() => handleCategoryChange('allen')}>Allen Solly</a></li>
    </ul>
  </div>

  {/* <div class="dropdown">
    <button class="btn btn- dropdown- button321" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Price Range
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a onClick={()=>priceRange("0-500")} class="dropdown-item lithium" href="#">0-500</a></li>
      <li><a onClick={()=>priceRange("500-1000")} class="dropdown-item lithium" href="#">500-1000</a></li>
      <li><a onClick={()=>priceRange("1000-1500")} class="dropdown-item lithium" href="#">1000-1500</a></li>
      <li><a onClick={()=>priceRange("1500-2000")} class="dropdown-item lithium" href="#">1500-2000</a></li>
      <li><a onClick={()=>priceRange("1000-1500")} class="dropdown-item lithium" href="#">2000-2500</a></li>
    </ul>
  </div> */}
  <span className='button321 bbb' onClick={()=>clearproduct(null)}>All Products</span>
        </div>
        {/* <div className='search'> 

         
          <div className='bab'>
          <button className='bbb' onClick={() => handleCategoryChange('shirt')}>Shirt</button> 
          <button className='bbb' onClick={()=> handleCategoryChange('shoe')}>Shoe</button>
          <button className='bbb' onClick={()=> handleCategoryChange('pant')}>Pants</button>
     
          </div>
          
        </div> */}

        <div className='cat01'>

          <div className='cat2'>
            <div className='pprd'>
              {filteredByCategory().map((product) => (
                <Products data={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
