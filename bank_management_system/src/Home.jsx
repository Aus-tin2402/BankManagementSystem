import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate('')

  return (
    <header id="main">
        <button onClick={(e)=>navigate('/admin-login')}>Admin-Page</button>
        <button onClick={(e)=>navigate('user-login')}>User-Login</button>
    </header>
  )
}

export default Home