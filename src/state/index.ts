import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapse: boolean;
    theme: boolean;

}

const initialState: InitialStateTypes = {
    isSidebarCollapse: false,
    theme: false
}

export const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setIsSidebarCollapse: ( state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapse = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload;
        }
    }
});

export const { setIsSidebarCollapse, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;