import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserLogin from './Pages/User/UserLogin'
import UserSignUp from './Pages/User/UserSignUp.jsx'
import UserForgotPassword from './Pages/User/UserForgotPassword.jsx'
import AdminLogin from './Pages/Admin/AdminLogin.jsx'
import AdminForgotPassword from './Pages/Admin/AdminForgotPassword.jsx'
import AdminSignUp from './Pages/Admin/AdminSignUp.jsx'
import AdminHome from './Pages/Admin/AdminPages/AdminHome.jsx'
import UserMain from './Pages/User/UserHome/UserMain.jsx'
import UserHome from './Pages/User/UserHome/UserHome.jsx'
import Deposit from './Pages/User/UserHome/Task/Deposit.jsx'
import WithDrawal from './Pages/User/UserHome/Task/Withdrawal.jsx'
import FundTransfer from './Pages/User/UserHome/Task/FundTransfer.jsx'
import ShowBalance from './Pages/User/UserHome/Task/ShowBalance.jsx'
import ViewBalance from './Pages/User/UserHome/Task/ViewDetials.jsx'
import FetchAll from './Pages/Admin/AdminPages/Task/FetchAll.jsx'
import FetchId from './Pages/Admin/AdminPages/Task/FetchById.jsx'
import DeleteByID from './Pages/Admin/AdminPages/Task/DeleteByID.jsx'
const App = () => {
  return (
   <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/admin-signUp' element={<AdminSignUp/>}/>
        <Route path='/admin-forgot' element={<AdminForgotPassword/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/user-signup' element={<UserSignUp/>}/>
        <Route path='/user-forgot' element={<UserForgotPassword/>}/>
        <Route path='/user-main' element={<UserMain/>}/>
        <Route path='/user-home' element={<UserHome/>}/>
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/withdrawal' element={<WithDrawal/>}/>
        <Route path='/fund-Transfer' element={<FundTransfer/>}/>
        <Route path='/show-balance' element={<ShowBalance/>}/>
        <Route path='/view-detials' element={<ViewBalance/>}/>
        <Route path='/admin-fetchAll' element={<FetchAll/>}/>
        <Route path='/admin-fetchId' element={<FetchId/>}/>
        <Route path='/admin-delete' element={<DeleteByID/>}/>
      </Routes>
   </>
  )
}

export default App