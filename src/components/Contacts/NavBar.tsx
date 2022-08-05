import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import Button from '../UI/Button'
import { useAppDispatch } from './../../hooks/redux';
import { useNavigate } from 'react-router';
import { login, setUserAuth } from '../../store/slices/UserSlice';

export default function NavBar() {

  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [componentIsAuth, setComponentIsAuth] = useState(false)
  
  //we update auth state if any of auth states changes
  //componentIsAuth is local for NavBar, user.isAuth for redux store
  useEffect(() => {
    const auth = !!localStorage.getItem('auth')
    setComponentIsAuth(auth)
  }, [user.isAuth])

  useEffect(() => {
    dispatch(setUserAuth(componentIsAuth))
  }, [componentIsAuth, dispatch])

  function logoutOrLogin() {
    componentIsAuth
      ? dispatch(login(false))
      : navigate('/login')
  }

  return (
    <nav>
      <div className='to-login'>
          <Button onClick={logoutOrLogin}>{componentIsAuth ? 'Выйти' : 'Войти'}</Button >
        </div>
    </nav>
  )
}
