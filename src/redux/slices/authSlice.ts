import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Auth = {
    isAuthenticated: boolean,
    username?: string
}

const initialState: Auth = {
    isAuthenticated: false
}

const initiateStateFromLocalStorage = (): Auth => {
    return localStorage.getItem('username') ? {
        isAuthenticated: true,
        username: localStorage.getItem('username') ?? ""
    } : initialState;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initiateStateFromLocalStorage(),
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.username = action.payload;
            localStorage.setItem('username', action.payload);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = undefined;
            localStorage.removeItem('username')
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;