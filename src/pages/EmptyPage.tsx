import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/UI/Button'

export default function EmptyPage() {
  
  const navigation = useNavigate()

  return (
    <div className='emptyPage'>
      <h1>Тут ничего нет! Вы не ошиблись?</h1>
      <Button onClick={() => navigation('/contacts')}> К контактам </Button>
    </div>
  )
}