import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState,useEffect,useContext } from 'react'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import  Context  from '../../Context/index'
import imagen from './img/logoCarro.png'
import { Link } from 'react-router-dom'
import './darkMode.css'
import './store.css'

const NavBarStore = () => {
  const [theme, setTheme] = useState('light');
  const userRegister = useContext(Context)
  const userLoged= userRegister.users.email

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  

  return (
    <div className={`App ${theme}`} >
      <nav >
        <div className="nav-wrapper">
          <Link to="/store" >
      
              <h4 className="brand-logo center">
                  e-Store
            
                    <img src={imagen}
                      style={{maxWidth:"30px",height:"27px",margin:"0px 0 -5px 8px",borderRadius:"5px"}}
                      alt="logo"
                    />
              </h4>
          </Link>
        
          {
            userLoged && 
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/store">Store</Link></li>
            </ul>
          }
          <a href="#" data-target="burger_menu" className="sidenav-trigger"><div><FontAwesomeIcon icon={faBars}/></div></a>
            <ul className="right hide-on-med-and-down">
              <li >
                Hello! {userLoged}
              </li>
              <li  >
                <button className="btn btn-primary" onClick={toggleTheme} style={{margin:"10px",width:"30px",height:"30px",borderRadius:"50%"}}>
                  {theme==="light" ? (<div style={{margin:"-10px"}}><FontAwesomeIcon icon={faMoon}/></div>): (<div style={{margin:"-10px"}}><FontAwesomeIcon icon={faSun}/></div>)}
                </button>
              </li>
            </ul>
        </div>
          <ul className="sidenav" id="burger_menu" style={{backgroundColor:"rgba(28, 59, 63, 0.84)", width:"200px"}}>
          <li style={{margin:"20px"}}>
               Hello! {userLoged}
            </li>
            <li style={{margin:"20px"}} >
              <button className="btn btn-primary" onClick={toggleTheme}>
                {theme==="light" ? (<div><FontAwesomeIcon icon={faMoon}/></div>): (<div><FontAwesomeIcon icon={faSun}/></div>)}
              </button>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default NavBarStore