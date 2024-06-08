import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewsLetter from './components/NewsLetter';
import ContactUs from './components/ContactUs';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <NavBar toggleSidebar={toggleSidebar} />
      <Home />
      <NewsLetter />
      <ContactUs/>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;

