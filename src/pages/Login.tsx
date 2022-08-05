import React, { useEffect, useState } from 'react'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import { loginLocal } from '../store/slices/UserSlice';
import { useAppDispatch, useAppSelector } from './../hooks/redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../store/actionCreators/auth';
import stringIsValid from '../utils/stringIsValid';

export default function Login() {

  const [loginValue, setLoginValue] = useState('')
  const [password, setPassword] = useState('')
  const [typoError, setTypoError] = useState('')
  const loginStatus = useAppSelector(state => state.user.loginStatus)
  const error = useAppSelector(state => state.user.loginError)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function changeLogin(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginValue(e.target.value)
  }

  function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }
  
  useEffect(() => {
    if (loginStatus === 200) {
      dispatch(loginLocal(true))
      navigate('/contacts')
    }
  }, [dispatch, loginStatus, navigate])

  function sendLoginRequest() {
    if (stringIsValid(loginValue, password)) {
      setTypoError('Логин и пароль должны содержать символы')
      setTimeout(() => {
          setTypoError('')
      }, 3000)
      setLoginValue('')
      setPassword('')
      return
  }
    dispatch(login({login: loginValue, password: password}))
  }

  return (
    <div className='loginRegister'>
      <h1>Вход</h1>
      <Input 
        type='text' 
        label labelText='Логин' 
        value={loginValue} 
        placeholder='Введите логин' 
        onChange={changeLogin}
      />
      <Input 
        type='password' 
        label labelText='Пароль' 
        value={password} 
        placeholder='Введите пароль' 
        onChange={changePassword}
      />
      <Link className='link'to={'/registration'}>
        Не зарегистрированы?
      </Link>
      {(error || typoError) && <p className='error'>{error || typoError}</p>}
      <Button onClick={sendLoginRequest}>Войти</Button>
    </div>
  )
}
