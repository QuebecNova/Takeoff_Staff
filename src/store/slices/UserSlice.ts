import { createSlice } from '@reduxjs/toolkit'

interface UserState {}

const initialState: UserState = {}

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
})

export default UserSlice.reducer
