import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext);

  const handleTheme = () => {
    if (theme == "light") {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }
  return (
    <>
      <div className={`navbar shadow-sm justify-between  ${theme == "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="flex ">
          <a className=" text-xl">NEXAMOBILE</a>
        </div>
        <nav className='display flex '>
          <ul className='display flex font-bold gap-5 align-item-center'>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

          </ul>
        </nav>
        <div className="flex gap-2">
          <button className='border-1' onClick={handleTheme}>switch theme</button>
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