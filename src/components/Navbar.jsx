import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import menu from '../images/menu.svg'
import PopupMenu from './PopupMenu'

const Navbar = ({navlinks}) => {
  const [popupState, setPopupState] = useState(false)
  const onTriggerPopup = () => setPopupState(!popupState)
  return (
    <div>
      <header className='flex items-center justify-center w-auto h-auto absolute top-5 left-0 right-0'>
        <nav className='flex items-center justify-between travig-container '>
          <NavLink to={`/`} className="flex items-center">

            <h1 className='font-bold text-3xl font-mono'>AgencyTravel</h1>
          </NavLink>
          <ul className='flex items-center lg:hidden gap-7 '>
              {navlinks?.map((val, i) => (
                <li key={i}>
                  <NavLink  to={'#'} className="text-lg text-slate-900 hover:text-teal-600">{val.link}</NavLink>
                </li>
              ))}
          </ul>
          <ul className='flex items-center lg:hidden '>
             <li>
              <button type="button" className="button-emrald px-7 text-base py-1">Join Us</button>
             </li>
          </ul>
          <ul className='hidden lg:flex items-center'>
            <li>
              <button onClick={onTriggerPopup} type="button" className='flex items-center
              justify-center transition-all duration-200 active:scale-90'>
                <img src={menu} alt="" className='object-cover shadow-sm filter' />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
    </div>
  )
}

export default Navbar
