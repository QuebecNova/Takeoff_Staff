import React from 'react'
import { IContact } from './../../types/contacts';
import Button from './../UI/Button/index';

type Props = {
  contact: IContact
}

export default function Contact({contact} : Props) {
  return (
    <div className='contacts__contact'>
      <p className='contacts__contact-name'>{contact.name}</p>
      <p className='contacts__contact-email'>{contact.email}</p>
      <p className='contacts__contact-phone'>{contact.phone}</p>
      <div className='contacts__contact-actions'>
        <Button>Редактировать</Button>
        <Button>Удалить</Button>
      </div>
    </div>
  )
}
