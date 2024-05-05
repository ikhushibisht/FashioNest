import './App.css';
import Navbar from './models/navbar/navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Categories from './screens/categories';
import Home from './screens/shop';
import Product from './screens/product';
import Cart from './screens/cart';
import Login from './screens/login';
import Footer from './models/footer/footer';
import men_banner from './models/assets/men_banner.png'
import women_banner from './models/assets/women_banner.png'
import kids_banner from './models/assets/kids_banner.png'

function App() {
  return (
    <div> 
      <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/men' element={<Categories banner={men_banner} category= "Men"/>}/>
  <Route path='/women' element={<Categories banner={women_banner} category= "Women"/>}/>
  <Route path='/kids' element={<Categories banner={kids_banner} category= "Kids"/>}/>
  <Route path="/product" element={<Product/>}>
  <Route path=":productId" element={<Product/>}/>
    </Route>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
