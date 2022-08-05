import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAllContacts } from '../actionCreators/fetchContacts'
import { IContact } from './../../types/contacts'

interface ContactState {
    isLoading: boolean
    contactsData: IContact[] | null
    filteredContactsData: IContact[] | null
    error: string | undefined
}

const initialState: ContactState = {
    isLoading: false,
    contactsData: null,
    filteredContactsData: null,
    error: '',
}

const ContactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        filterContactsBySearchQuery(state, action: PayloadAction<string>) {
            if (!state.contactsData) return
            state.filteredContactsData = state.contactsData.filter(
                (contact) =>
                    contact.name.match(action.payload) ||
                    contact.email.match(action.payload) ||
                    contact.phone.match(action.payload)
            )
        },
        addContact(state, action: PayloadAction<IContact>) {
            if (!state.contactsData || !state.filteredContactsData) return
            action.payload.id = state.contactsData.length + 1
            state.contactsData.push(action.payload)
            state.filteredContactsData.push(action.payload)
        },
        deleteContactById(state, action: PayloadAction<number>) {
            if (!state.filteredContactsData || !state.contactsData) return
            //we changing our both states to save changes through app usage
            state.filteredContactsData = state.filteredContactsData.filter(
                (contact) => contact.id !== action.payload
            )
            state.contactsData = state.contactsData.filter(
                (contact) => contact.id !== action.payload
            )
        },
        editContact(state, action: PayloadAction<IContact>) {
            if (
                !state.contactsData ||
                !state.filteredContactsData ||
                !action.payload.id
            ) {
                return
            }
            //we iterate through contacts to find that one we need, and change it with payload
            state.contactsData = state.contactsData.map((contact) => {
                if (contact.id === action.payload.id) return action.payload
                return contact
            })
            state.filteredContactsData = state.filteredContactsData.map(
                (contact) => {
                    if (contact.id === action.payload.id) return action.payload
                    return contact
                }
            )
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAllContacts.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(fetchAllContacts.fulfilled, (state, action) => {
            state.contactsData = action.payload
            state.filteredContactsData = state.contactsData
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

export const {
    filterContactsBySearchQuery,
    addContact,
    deleteContactById,
    editContact,
} = ContactSlice.actions

export default ContactSlice.reducer
