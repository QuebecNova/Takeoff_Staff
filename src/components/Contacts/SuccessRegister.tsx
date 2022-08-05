import React from 'react'
import { Link } from 'react-router-dom'

export default function SuccessRegister() {
  return (
    <div className='success'>
        <p>Пользователь успешно зарегестрирован</p>
        <Link className='link' to={'/login'}>Теперь войдите!</Link>
    </div>
  )
}
