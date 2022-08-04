import { createSlice } from '@reduxjs/toolkit'

interface ContactState {}

const initialState: ContactState = {}

const ContactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {},
})

export default ContactSlice.reducer
