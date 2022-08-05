import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { useAppSelector } from '../hooks/redux'
import EmptyPage from './EmptyPage'
import Login from './Login'
import Contacts from './Contacts';
import Register from './Register';

export default function AppRouter() {

  const user = useAppSelector(state => state.user)

  return (
    <div className='App'>
      {localStorage.getItem('auth') || user.isAuth
        ?
        <Routes>
          <Route path='*' element={<EmptyPage/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        :
        <Routes>
          <Route path='*' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Register/>}></Route>
        </Routes>
      }
    </div>
  )
}
