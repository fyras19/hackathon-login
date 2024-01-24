import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SelectionSlice {
    selection: number
}

const initialState: SelectionSlice = {
    selection: 1
}

export const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        setSelection: (state, action: PayloadAction<number>) => {
            state.selection = action.payload
        }
    }
});

export const { setSelection } = selectionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getSelection = (state: RootState) => state.selection.selection;

export default selectionSlice.reducer;