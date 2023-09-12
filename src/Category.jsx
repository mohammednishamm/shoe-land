import React, { useState } from 'react'
import PRODUCTS from './component/Data';

const Category = () => {
    const [data,setData]=useState(PRODUCTS);
    const filterResult=(cartitem)=>{
        const result=PRODUCTS.filter((curdata)=>{
            return curdata.category===cartitem;

        });
        setData(result)
    }
  return (
    <>z
    <div>Category</div>
    <button onClick={()=>filterResult('Nike')}>Nike</button>
    </>
  )
}

export default Category
import React, { useState } from 'react';
import { Products } from './Products';
import PRODUCTS from './Data';

export const Shop = () => {
  const [searchterm, setSearchterm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleSearchChange = (event) => {
    setSearchterm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

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

    return filtered;
  };

  return (
    <div className='productt'>
      <div className='search'>
        <input
          className='search11'
          type="text"
          placeholder='search'
          value={searchterm}
          onChange={handleSearchChange}
        />
        <button onClick={() => handleCategoryChange('shirt')}>Shirt</button>
        <button onClick={() => handleCategoryChange('shoe')}>Shoe</button>
        <button onClick={() => handleCategoryChange('pant')}>Pants</button>
      </div>

      <div className='cat01'>
        <div className='cat1'>
          <div class="dropdown">
            {/* Add buttons or dropdown items for brand selection */}
            <button class="btn btn- dropdown-toggle button321 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="">
              Brand
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" onClick={() => handleBrandChange('Nike')}>Nike</a></li>
              <li><a class="dropdown-item" onClick={() => handleBrandChange('adidas')}>Adidas</a></li>
              <li><a class="dropdown-item" onClick={() => handleBrandChange('allensolly')}>Allen Solly</a></li>
            </ul>
          </div>
        </div>
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


    // const filteredByCategory = selectedCategory
    //   ? filteredProducts.filter((product) => product.category === selectedCategory) 
    //   : filteredProducts;
    