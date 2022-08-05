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
  const [isAuth, setIsAuth] = useState(false)
  
  //two useEffects because we need to update auth state if any of auth states changes
  //isAuth is local for navBar, user.isAuth for redux store
  useEffect(() => {
    const auth = !!localStorage.getItem('auth')
    setIsAuth(auth)
  }, [user.isAuth])

  useEffect(() => {
    dispatch(setUserAuth(isAuth))
  }, [isAuth, dispatch])

  function logoutOrLogin() {
    isAuth
      ? dispatch(login(false))
      : navigate('/login')
  }

  return (
    <nav>
      <div className='to-login'>
          <Button onClick={logoutOrLogin}>{isAuth ? 'Выйти' : 'Войти'}</Button >
        </div>
    </nav>
  )
}
