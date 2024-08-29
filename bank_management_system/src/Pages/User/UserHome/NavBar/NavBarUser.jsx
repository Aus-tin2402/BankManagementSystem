import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const NavBarUser = () => {
  return (
    <nav>
       <Link to='/deposit' className='links'>Deposit</Link>
       <Link to='/withdrawal' className='links'>Withdrawal</Link>
       <Link to='/fund-Transfer' className='links'>Fund Transfer</Link>
       <Link to='/show-balance' className='links'>Show Balance</Link>
       <Link to='/view-detials' className='links'>Show Transcation</Link>
    </nav>
  )
}

export default NavBarUser