import { useState } from "react";
import "../styles/mobileSidebar.css";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-sidebar">
      <button className="toggle-button" style={isOpen ? {display : 'none'} : {display : 'block'}} onClick={toggleSidebar}>
      <i className="fa-solid fa-arrow-right"/>
      </button>

      <div className={`msidebar ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSidebar}>
          ✖
        </button>
          <Sidebar/>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default MobileSidebar;
