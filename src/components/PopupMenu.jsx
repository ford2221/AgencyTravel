import React from 'react'
import { NavLink } from 'react-router-dom'

const PopupMenu = ({navlinks, popupState}) => {
  return (
    <div>
      <nav className={`
      fixed top-14 right-6 bg-white bg-opacity-70 opacity-100
      z-50 backdrop-filter backdrop-blur-md rounded-lg w-36 h-auto py-5 px-6
      transition-transform duration-300 hidden lg:block
      ${popupState ? 'lg:showpopup' : 'lg:noshowpopup'}
      `}>
        <ul className='flex items-center flex-col gap-3'>
          {navlinks?.map((val, i) => (
            <li key={i} className="hover:text-teal-500">
              <NavLink  to={'#'} >{val.link}</NavLink>
            </li>
          ))}
          <li>
            <button type="button" className='rounded-full text-xs px-6 shadow-lg shadow-emerald-500
            bg-gradient-to-b from-emerald-500 to-teal-500 py-2 text-white'>Join Us</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PopupMenu
