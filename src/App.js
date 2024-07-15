import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
// import OrderTable from './components/Customer';
// import AddingNewItem from './components/AddingNewItem';
// import FarmerDashboard from './components/Farmer';
// import Product from './components/Product';
import Category from './components/Category';
// import Categories from './components/Categories';
// import Home from './components/Home';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  //Just fo refrence for Product.js
  /*const product = {
    image: 'https://via.placeholder.com/400x300',  // replace with the actual path
    givenBy: 'Depandra tiwari',
    date: '26-09-23',
    state: 'Uttar Pradesh',
    stock: '100kg',
    address: 'Basti, UP',
    price: '10,00',
    contactPerson: 'Depandra',
  };*/

  return (
    <div className='addMargin'>
      <NavBar toggleSidebar={toggleSidebar} />
      
      {/* <Home /> */}
      {/* <Categories/> */}
      <Category/>
      {/* <Product product={product}/> */}
      {/* <FarmerDashboard/> */}
      {/* <AddingNewItem/> */}
      {/* <OrderTable/> */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;

