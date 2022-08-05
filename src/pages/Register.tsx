import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import { useAppSelector } from '../hooks/redux'
import { register } from './../store/actionCreators/auth';
import { useAppDispatch } from './../hooks/redux';
import SuccessRegister from '../components/Contacts/SuccessRegister'
import stringIsValid from './../utils/stringIsValid';

export default function Register() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [typoError, setTypoError] = useState('')
    const error = useAppSelector(state => state.user.registerError)
    const registerStatus = useAppSelector(state => state.user.registerStatus)
    const dispatch = useAppDispatch()

    function changeLogin(e: React.ChangeEvent<HTMLInputElement>) {
        setLogin(e.target.value)
    }

    function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    useEffect(() => {
        
    }, [])

    function sendRegRequest() {
        if (stringIsValid(login, password)) {
            setTypoError('Логин и пароль должны содержать символы')
            setTimeout(() => {
                setTypoError('')
            }, 3000)
            setLogin('')
            setPassword('')
            return
        }
        dispatch(register({login: login, password: password}))
    }

  return (
    <div className='loginRegister'>
      <h1>Регистрация</h1>
      <Input 
        type='text' 
        label labelText='Новый логин' 
        value={login} 
        placeholder='Ваш логин' 
        onChange={changeLogin}
      />
      <Input 
        type='password' 
        label labelText='Новый пароль' 
        value={password} 
        placeholder='Придумайте пароль' 
        onChange={changePassword}
      />
      <Link className='link'to={'/login'}>
        Уже имеете аккаунт?
      </Link>
      {(error || typoError) && <p className='error'>{error || typoError}</p>}
      {registerStatus === 200 && <SuccessRegister/>}
      <Button onClick={sendRegRequest}>Зарегистрироваться</Button>
    </div>
  )
}
