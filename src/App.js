import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import Product from './components/Product';
// import Category from './components/Category';
// import BuySell from './components/BuySell';
// import Home from './components/Home';
// import NewsLetter from './components/NewsLetter';
// import ContactUs from './components/ContactUs';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  //Just fo refrence for Product.js
  const product = {
    image: 'https://via.placeholder.com/400x300',  // replace with the actual path
    givenBy: 'Depandra tiwari',
    date: '26-09-23',
    state: 'Uttar Pradesh',
    stock: '100kg',
    address: 'Basti, UP',
    price: '10,00',
    contactPerson: 'Depandra',
  };

  return (
    <div>
      <NavBar toggleSidebar={toggleSidebar} />
      {/* <Home />
      <NewsLetter />
      <ContactUs/> */}
      {/* <BuySell/> */}
      {/* <Category/> */}
      <Product product={product}/>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;

