import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IContact } from '../../types/contacts'

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchAllContacts = createAsyncThunk(
    'contacts/fetchAllContacts',
    async () => {
        const response = await axios.get(BASE_URL)
        const data: IContact[] = response.data
        return data
    }
)
