import React from 'react'
import { Link } from 'react-router-dom'
import'./NavBar.css'
const NavBar = () => {
  return (
    <>
        <nav>
            <Link path='/adminhome' className='links'  >Home</Link>
            <Link className='links' to='/admin-fetchAll'  >FetchAll</Link>
            <Link className='links' to='/admin-fetchId' >FetchById</Link>
            <Link className='links' to='/admin-delete'  >DeleteById</Link>
        </nav>
    </>
  )
}

export default NavBar