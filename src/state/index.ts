import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapse: boolean;
    theme: boolean;
    openProjectModal:boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapse: false,
    theme: false,
    openProjectModal:false,
}

export const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setIsSidebarCollapse: ( state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapse = action.payload;
        },
        setTheme: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload;
        },
        setOpenProjectModal: (state, action:PayloadAction<boolean>) => {
            state.openProjectModal = action.payload;
        }   
    }
});

export const { setIsSidebarCollapse, setTheme, setOpenProjectModal } = globalSlice.actions;

export default globalSlice.reducer;