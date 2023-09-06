import './navstyle.css'
import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import NavIcons from '../Navbar_icons/NavIcons'

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <div>
            <ul className='navbar'>
                <li><img src={logo} alt='logo' style={{width:"45px"}}/></li>
                <li className="dropdown">
                   Categories
                  <ul className="dropdown-content">
                    <li><Link to='/Tees'>Tees</Link></li>
                    <li><Link to='/hoodies'>Hoodies</Link></li>
                    <li><Link to='/covers'>covers</Link></li>
                  </ul>
              </li>
                <li><Link to='/Deals'>Deals</Link></li>
                <li><Link to='/Whats'>What's new</Link></li>
            </ul>
        </div>
        <div>
          <ul className='navbar'>
            <li><input type="text" class="search" placeholder="Search here"/></li>
          </ul>
        </div>
        {/* <div>
            <ul className='navbar'>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div> */}
        <NavIcons/>
      </nav>
    </>
  )
}

export default Navbar;
