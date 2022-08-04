import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/UI/Button'

export default function EmptyPage() {
  
  const navigation = useNavigate()

  return (
    <>
      <Button onClick={() => navigation('/contacts')}> К контактам </Button>
      <h1>Тут ничего нет! Вы не ошиблись?</h1>
    </>
  )
}