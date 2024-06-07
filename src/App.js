import './App.css';
import  { useState } from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <NavBar  toggleSidebar={toggleSidebar} />
      <Home/>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    </div>
  );
}

export default App;

