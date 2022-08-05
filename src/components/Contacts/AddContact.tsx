import React, { Dispatch, SetStateAction, useState } from 'react'
import { addContact } from '../../store/slices/ContactsSlice';
import { IContact } from '../../types/contacts';
import stringIsValid from '../../utils/stringIsValid';
import Button from '../UI/Button'
import Input from '../UI/Input'
import { useAppDispatch } from './../../hooks/redux';

type Props = {
    setAddIsVisible: Dispatch<SetStateAction<boolean>>
}

export default function AddContact({setAddIsVisible} : Props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')

    const dispatch = useAppDispatch()

    function changeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }
    function changeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    function changePhone(e: React.ChangeEvent<HTMLInputElement>) {
        setPhone(e.target.value)
    }

    function confirmAddAndClose() {
        if (stringIsValid(name, email, phone)) {
            setError('Вы не что-то не указали')
            return
        }
        const contact : IContact = {
            name,
            email,
            phone,
        }
        dispatch(addContact(contact))
        setAddIsVisible(false)
    }

  return (
    <div className='contacts__contact-edit-add'>
      <h3>Кого хотите добавить?</h3>
      <Input 
        value={name} 
        type='text' 
        onChange={changeName} 
        label labelText='Имя' 
        placeholder='Какое-нибудь имя...'
      />
      <Input 
        value={email} 
        type='text' 
        onChange={changeEmail} 
        label labelText='Почта' 
        placeholder='Почта...'
      />
      <Input 
        value={phone} 
        type='text'
        onChange={changePhone} 
        label labelText='Телефон' 
        placeholder='Телефон...'
      />
      {error && <p className='contacts__contact-edit-add-error'>{error}</p>}
      <Button onClick={confirmAddAndClose}>Добавить</Button>
    </div>
  )
}
