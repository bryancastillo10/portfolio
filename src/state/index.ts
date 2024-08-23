import { MajorProjectTypes } from "@/app/api/project/major/data";
import { MinorProjectTypes } from "@/app/api/project/minor/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapse: boolean;
    theme: boolean;
    openProjectModal:boolean;
    selectedProject: MajorProjectTypes | MinorProjectTypes | null;
    openSkillsModal:boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapse: false,
    theme: false,
    openProjectModal:false,
    selectedProject:null,
    openSkillsModal:false,
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
        },
        setSelectedProject: (state, action:PayloadAction<MajorProjectTypes | MinorProjectTypes | null>) => {
            state.selectedProject = action.payload;
        },
        setOpenSkillsModal: (state, action:PayloadAction<boolean>) => {
            state.openSkillsModal = action.payload;
        } 
    }
});

export const { setIsSidebarCollapse, 
               setTheme, 
               setOpenProjectModal, 
               setSelectedProject,
               setOpenSkillsModal
            } = globalSlice.actions;

export default globalSlice.reducer;