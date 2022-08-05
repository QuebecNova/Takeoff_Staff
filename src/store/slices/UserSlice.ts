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
        login(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
            if (action.payload) {
                localStorage.setItem('auth', 'true')
            } else {
                localStorage.clear()
            }
        },
        setUserAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
    },
})

export const { login, setUserAuth } = UserSlice.actions

export default UserSlice.reducer
