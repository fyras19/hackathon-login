import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Event } from "../../models/Event.model";

export type User = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    username: string,
    community: string,
    events: Event[]
}

const initialState: User[] = []

const initiateStateFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users') ?? JSON.stringify(initialState));
    return users as User[]
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initiateStateFromLocalStorage(),
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            if (!state.map(user => user.username).includes(action.payload.username)) {
                state.push(action.payload)
                localStorage.setItem("users", JSON.stringify(state))
            }
        },
        addEvent: (state, action: PayloadAction<{ username: string, event: Event }>) => {
            state.find(user => user.username === action.payload.username)?.events.push(action.payload.event);
            localStorage.setItem("users", JSON.stringify(state))
        }
    }
})

export const { addUser, addEvent } = usersSlice.actions;

export default usersSlice.reducer;