import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL_LOGIN = 'http://localhost:8000/auth/login'
const BASE_URL_REGISTER = 'http://localhost:8000/auth/register'

interface Credentials {
    login: string
    password: string
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials: Credentials) => {
        const response = await axios.post(BASE_URL_REGISTER, credentials)
        const data: string = response.data
        return data
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: Credentials) => {
        const response = await axios.post(BASE_URL_LOGIN, credentials)
        const data: string = response.data
        return data
    }
)
