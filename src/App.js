import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import NavBar from './Components/NavBar';
import ProductInfo from './Components/ProductInfo';
import {Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/product' element={<Product/>}/>
        <Route exact path="/product/:id" element={<ProductInfo/>}/>
        <Route exact path="/cart/:id" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
