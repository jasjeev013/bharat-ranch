import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import CustomerDashboard from './components/CustomerDashboard';
import AddingNewItem from './components/AddingNewItem';
import FarmerDashboard from './components/FarmerDashboard';
import Product from './components/Product';
import Category from './components/Category';
import Categories from './components/Categories';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lending from './components/Lending';
import Donations from './components/Donations';
import Help from './components/Help';
import Account from './components/Account';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  //Just fo refrence for Product.js
  

  return (
    <div className='addMargin'>
      <Router>
        <NavBar toggleSidebar={toggleSidebar} />

        <Routes>
          
          <Route path="/farmer" element={<FarmerDashboard />}/>
  
          <Route path="/customer" element={<CustomerDashboard />}/>

          <Route path="/addingNewItem" element={<AddingNewItem />}/>

          <Route path="/account" element={<Account />}/> 
          
          <Route path="/help" element={<Help/>} />

          <Route path="/donations" element={<Donations/>} />

          <Route path="/lending" element={<Lending/>} />

          <Route path="/product" element={<Product/>} />
            
          <Route path="/category/:category" element={<Category />}/>
            
          <Route path="/categories" element={<Categories />}/>
            
          <Route path="/" element={<Home />} />
            
        </Routes>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </Router>


      {/* <FarmerDashboard/> */}
      {/* <AddingNewItem/> */}
      {/* <OrderTable/> */}
    </div>
  );
}

export default App;

