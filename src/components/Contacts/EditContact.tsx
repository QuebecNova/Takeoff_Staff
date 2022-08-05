import React, { Dispatch, SetStateAction, useState } from 'react'
import { editContact } from '../../store/slices/ContactsSlice';
import { IContact } from '../../types/contacts';
import Button from '../UI/Button'
import Input from '../UI/Input'
import { useAppDispatch } from './../../hooks/redux';

interface DataAndDispatchers {
    id: number | undefined
    name: string
    setName: Dispatch<SetStateAction<string>>
    email: string
    setEmail: Dispatch<SetStateAction<string>>
    phone: string
    setPhone: Dispatch<SetStateAction<string>>
    setEditIsVisible: Dispatch<SetStateAction<boolean>>
} 

type Props = {
    dataAndDispatchers: DataAndDispatchers
}

export default function EditContact(props : Props) {

    const {
        id,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        setEditIsVisible
    } = props.dataAndDispatchers
    
    //creating local values from passed props to pass in inputs
    const [localName, setLocalName] = useState(name)
    const [localEmail, setLocalEmail] = useState(email)
    const [localPhone, setLocalPhone] = useState(phone)
    const [error, setError] = useState('')
    const dispatch = useAppDispatch()

    function changeName(e: React.ChangeEvent<HTMLInputElement>) {
        setLocalName(e.target.value)
    }
    function changeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setLocalEmail(e.target.value)
    }
    function changePhone(e: React.ChangeEvent<HTMLInputElement>) {
        setLocalPhone(e.target.value)
    }

    //if user clicks 'Confirm' => all changed data go to app
    function confirmChangesAndClose() {
        if (!localName || !localEmail || !localPhone) {
            setError('Вы не что-то не указали')
            return
        }
        const contact : IContact = {
            id,
            name: localName,
            email: localEmail,
            phone: localPhone,
        }
        setName(localName)
        setEmail(localEmail)
        setPhone(localPhone)
        setEditIsVisible(false)
        dispatch(editContact(contact))
    }

  return (
    <div className='contacts__contact-edit-add'>
      <h3>Что хотите изменить?</h3>
      <Input 
        value={localName} 
        type='text' 
        onChange={changeName} 
        label labelText='Имя'
      />
      <Input 
        value={localEmail} 
        type='text' 
        onChange={changeEmail} 
        label labelText='Почта'
      />
      <Input 
        value={localPhone} 
        type='text' 
        onChange={changePhone} 
        label labelText='Телефон'
      />
      {error && <p className='contacts__contact-edit-add-error'>{error}</p>}
      <Button onClick={confirmChangesAndClose}>Изменить</Button>
    </div>
  )
}
