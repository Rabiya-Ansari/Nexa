import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm justify-between ">
        <div className="flex ">
          <a className="btn btn-ghost text-xl">NEXAMOBILE</a>
        </div>
        <nav className='display flex '>
          <ul className='display flex font-bold gap-5 align-item-center'>
            <Link to="/"><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/services'><li>Services</li></Link>
            <Link to='/contact'><li>Contact</li></Link>

          </ul>
        </nav>
        <div className="flex gap-2">
          <input type="text" placeholder="Search" className="input w-24 md:w-auto" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar