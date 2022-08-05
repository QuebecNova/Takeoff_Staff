import { createSlice } from '@reduxjs/toolkit'
import { fetchAllContacts } from '../actionCreators/fetchContacts'
import { IContact } from './../../types/contacts'

interface ContactState {
    isLoading: boolean
    contactsData: IContact[] | null
    error: string | undefined
}

const initialState: ContactState = {
    isLoading: false,
    contactsData: null,
    error: '',
}

const ContactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllContacts.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(fetchAllContacts.fulfilled, (state, action) => {
            state.contactsData = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(fetchAllContacts.rejected, (state, action) => {
            state.error = action.error.message
            state.contactsData = null
            state.isLoading = false
        })
    },
})

export const {} = ContactSlice.actions

export default ContactSlice.reducer
