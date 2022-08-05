import React, { useState } from 'react'
import Modal from '../UI/Modal/Modal';
import { IContact } from './../../types/contacts';
import Button from './../UI/Button/index';
import EditContact from './EditContact';
import { useAppDispatch } from './../../hooks/redux';
import { deleteContactById } from '../../store/slices/ContactsSlice';

type Props = {
  contact: IContact
}

export default function Contact({contact} : Props) {

  // Each contact gets value from fetch, then we create states from that value,
  // if we want changable data, and passing that state to the actual UI
  const [editIsVisible, setEditIsVisible] = useState(false)
  const [name, setName] = useState(contact.name)
  const [email, setEmail] = useState(contact.email)
  const [phone, setPhone] = useState(contact.phone)

  const dispatch = useAppDispatch()

  function showEdit() {
    setEditIsVisible(true)
  }

  function deleteContact() {
    if (!contact.id) return
    dispatch(deleteContactById(contact.id))
  }

  return (
    <div className='contacts__contact'>
      <Modal visible={editIsVisible} setModal={setEditIsVisible}>
        <EditContact 
          dataAndDispatchers={
            {id: contact.id, name, setName, email, setEmail, phone, setPhone, setEditIsVisible}
          }
        />
      </Modal>
      <p className='contacts__contact-name'>{`${contact.id}. ${name}`}</p>
      <p className='contacts__contact-email'>{email}</p>
      <p className='contacts__contact-phone'>{phone}</p>
      <div className='contacts__contact-actions'>
        <Button onClick={showEdit}>Редактировать</Button>
        <Button onClick={deleteContact}>Удалить</Button>
      </div>
    </div>
  )
}
