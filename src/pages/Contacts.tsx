import React, { useEffect } from 'react'
import { fetchAllContacts } from '../store/actionCreators/fetchContacts';
import ContactsList from './../components/Contacts/ContactsList';
import { useAppDispatch } from './../hooks/redux';

export default function Contacts() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllContacts())
    }, [dispatch])

  return (
    <div className='contacts'>
        <ContactsList/>
    </div>
  )
}