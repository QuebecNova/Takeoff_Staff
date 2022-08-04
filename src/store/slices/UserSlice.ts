import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    isAuth: boolean
}

const initialState: UserState = {
    isAuth: false,
}

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
    },
})

export const { setIsAuth } = UserSlice.actions

export default UserSlice.reducer
