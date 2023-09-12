import logo from './logo.svg';
import './App.css';
import './Media.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
// import { Products } from './component/Products';
import { Shop } from './component/Shop';
import { More } from './More';
import { Cart } from './Cart';
import { Shopcontextprovider } from './Shopcontext';

function App() {
  return (
    <div className="App">
      <Shopcontextprovider>   
           <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
            <Route path='prd' element={<Shop/>}/>
            <Route path='mor' element={<More/>} />
            <Route path='cor' element={<Cart/>} />


        </Routes>






      </Router>
      </Shopcontextprovider>

      
    </div>
  );
}

export default App;
