import '../styles/sidebar.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: "fa-solid fa-table-cells-large",
      link: "/",
      active: true  
    },
    {
      name: "Leads",
      icon: "fa-regular fa-user",
      link: "/leads",
      active: false
    },
    {
      name: "Parts",
      icon: "fa-solid fa-gear",
      link: "/",
      active: false
    },
    {
      name: "Yard",
      icon: "fa-solid fa-archway",
      link: "/",
      active: false
    },
    {
      name: "Accounting",
      icon: "fa-solid fa-chart-column",
      link: "/",
      active: false
    },
    {
      name: "HR",
      icon: "fa-solid fa-user-group",
      link: "/",
      active: false
    },
  ]
  return (
    <div className="sidebar">
      <img className="logo" src={logo}/>
      <ul className={`nav-links`}>
      {
        sidebarItems?.map((item,idx)=>(
      <Link to={item.link} key={idx}> <li className={`${item?.active  ? 'active' : ''}`}><i className={item?.icon}></i>&nbsp;{item.name}</li></Link> 
        ))
      }
      </ul>
      <div className="logout">Sign Out</div>
    </div>
  );
};

export default Sidebar;
