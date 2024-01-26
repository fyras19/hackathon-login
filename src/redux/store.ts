import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "./slices/selectionSlice";
import usersReducer from "./slices/usersSlice";
import authReducer from "./slices/authSlice";
import eventsReducer from "./slices/eventsSlice";

export const store = configureStore({
    reducer: {
        selection: selectionReducer,
        users: usersReducer,
        auth: authReducer,
        events: eventsReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch