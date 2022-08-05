import React, { ReactNode, useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import Loader from '../UI/Loader/Loader'
import Contact from './Contact'
import Button from './../UI/Button/index';
import Input from '../UI/Input';
import Modal from '../UI/Modal/Modal';
import AddContact from './AddContact';
import { useAppDispatch } from './../../hooks/redux';
import { filterContactsBySearchQuery } from '../../store/slices/ContactsSlice';

export default function ContactsList() {

  const filteredContactsData = useAppSelector(state => state.contacts.filteredContactsData)
  const dispatch = useAppDispatch()

  const [renderedContacts, setRenderedContacts] = useState<ReactNode[]>()
  const [addIsVisible, setAddIsVisible] = useState(false)
  const [search, setSearch] = useState('')

  //useEffect is handles adding contacts to page
  //useEffect rerun after filteredContacts state changes
  useEffect(() => {
    const data = filteredContactsData
    if (!data) return
    const contactsElements : ReactNode[] = []
    data.forEach(contact => {
      contactsElements.push(
        <Contact contact={contact} key={contact.id}/>
      )
    })
    setRenderedContacts(contactsElements)
  }, [filteredContactsData])

  
  function showModal() {
    setAddIsVisible(true)
  }
  
  function changeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    searchThrough(e.target.value)
  }

  function searchThrough(value: string) {
    dispatch(filterContactsBySearchQuery(value))
  }

  return (
    <div className='contacts__list'>
      <Modal visible={addIsVisible} setModal={setAddIsVisible}>
        <AddContact setAddIsVisible={setAddIsVisible}/>
      </Modal>
      <div className='contacts__list-actions'>
        <Button onClick={showModal}>Добавить контакт</Button>
        <Input value={search} type='search' onChange={changeSearchValue} placeholder='Поиск...'/>
      </div>
      {filteredContactsData 
        ? renderedContacts
        : <Loader/>
      }
    </div>
  )
}
