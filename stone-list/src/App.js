import React from 'react';
import Sidebar from './components/SideBar';
import TopMenu from './components/TopMenu';
import PhotoGrid from './components/PhotoGrid';
import Footer from './components/Footer';
import './default.css'

function App() {
  // Functions to open and close the sidebar
  const w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  return (
    <div>
      <Sidebar onClose={w3_close} />
      <TopMenu onOpen={w3_open} />
      <div
        className="w3-main w3-content w3-padding"
        style={{ maxWidth: '1200px', marginTop: '100px' }}
      >
        <PhotoGrid />
        {/* <hr id="about" /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
