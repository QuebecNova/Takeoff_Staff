import React, { useState } from 'react'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import { login } from '../store/slices/UserSlice';
import { useAppDispatch } from './../hooks/redux';
import { useNavigate } from 'react-router';

export default function Login() {

  const [loginValue, setLoginValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function changeLogin(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginValue(e.target.value)
  }

  function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordValue(e.target.value)
  }

  function loginToApp() {
    dispatch(login(true))
    navigate('/contacts')
  }

  return (
    <div className='login'>
      <h1>Вход</h1>
      <Input type='text' label labelText='Логин' value={loginValue} placeholder='Введите логин' onChange={changeLogin}/>
      <Input type='password' label labelText='Пароль' value={passwordValue} placeholder='Введите пароль' onChange={changePassword}/>
      <Button onClick={loginToApp}>Войти</Button>
    </div>
  )
}
