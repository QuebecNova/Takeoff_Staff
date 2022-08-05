import React, { ReactNode, useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import Loader from '../UI/Loader/Loader'
import Contact from './Contact'
import Button from './../UI/Button/index';
import Input from '../UI/Input';

export default function ContactsList() {

  const contactsState = useAppSelector(state => state.contacts)

  const [renderedContacts, setRenderedContacts] = useState<ReactNode[]>()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const data = contactsState.contactsData
    if (!data) return
    const contactsElements : ReactNode[] = []
    data.forEach(contact => {
      contactsElements.push(
        <Contact contact={contact} key={contact.id}/>
      )
    })
    setRenderedContacts(contactsElements)
  }, [contactsState.contactsData])

  function changeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    searchThrough(e.target.value)
  }

  function searchThrough(value: string) {
    
  }

  return (
    <div className='contacts__list'>
      <div className='contacts__list-actions'>
        <Button>Добавить контакт</Button>
        <Input value={search} type='search' onChange={changeSearchValue} placeholder='Поиск...'/>
      </div>
      {contactsState.contactsData 
        ? renderedContacts
        : <Loader/>
      }
    </div>
  )
}
