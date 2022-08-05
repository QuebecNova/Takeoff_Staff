import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { register, login } from './../actionCreators/auth'

interface UserState {
    isAuth: boolean
    registerStatus: number
    loginStatus: number
    accessToken: string
    loginError: string | undefined
    registerError: string | undefined
}

const initialState: UserState = {
    isAuth: false,
    registerStatus: 401,
    loginStatus: 401,
    accessToken: '',
    loginError: '',
    registerError: '',
}

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        loginLocal(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
            if (action.payload) {
                localStorage.setItem('auth', 'true')
            } else {
                state.loginStatus = 401
                state.registerStatus = 401
                localStorage.clear()
            }
        },
        setUserAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(register.pending, (state) => {
            state.registerStatus = 202
            state.registerError = ''
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.accessToken = action.payload
            state.registerStatus = 200
            state.registerError = ''
        })
        builder.addCase(register.rejected, (state) => {
            state.registerStatus = 401
            state.registerError = 'Логин и/или пароль не подходят'
        })
        builder.addCase(login.pending, (state) => {
            state.loginStatus = 202
            state.loginError = ''
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.accessToken = action.payload
            state.loginStatus = 200
            state.loginError = ''
        })
        builder.addCase(login.rejected, (state, action) => {
            console.log(action.error)
            state.loginStatus = 401
            state.loginError = 'Логин и/или пароль не существуют'
        })
    },
})

export const { loginLocal, setUserAuth } = UserSlice.actions

export default UserSlice.reducer
