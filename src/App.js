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
import { useRecoilValue } from 'recoil';
import { isLoggedIn, userDetails } from './state/atoms/atoms';

function App() {

  const isLogginin = useRecoilValue(isLoggedIn);
  const userDetail = useRecoilValue(userDetails);
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
          
          {userDetail.role==='farmer' && <Route path="/farmer" element={<FarmerDashboard />}/>}
  
          {userDetail.role==='buyer' && <Route path="/customer" element={<CustomerDashboard />}/>}

          <Route path="/addingNewItem" element={<AddingNewItem />}/>

          {!isLogginin && <Route path="/account" element={<Account />}/> }
          
          <Route path="/help" element={<Help/>} />

          <Route path="/donations" element={<Donations/>} />

          {userDetail.role==='farmer' && <Route path="/lending" element={<Lending/>} />}

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

