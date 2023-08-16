import './navstyle.css'
import React from 'react'
import {Link} from 'react-router-dom'
const Nav2 = () => {
  return (
    <>
      <nav>
        <div>
            <ul className='navbar'>
                <li>logo</li>
                <li>Categories</li>
                <li><Link to='/Deals'>Deals</Link></li>
                <li><Link to='/Whats'>What's new</Link></li>
            </ul>
        </div>
        <div>
          <ul className='navbar'>
            <li><input type="text" class="search" placeholder="Search here"/></li>
          </ul>
        </div>
        <div>
            <ul className='navbar'>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav2;
