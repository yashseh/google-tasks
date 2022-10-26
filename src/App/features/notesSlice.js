import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
	name:'manageNotes',
   initialState : {
	   data:[]
   },
   reducers:{
		addNote:(state,action)=>{
			state.data.push(action.payload)
		},
		deleteNote:(state,action)=>{
			
			const index = state.data.indexOf(action.payload);
			 if(index > -1){
			 	state.data.splice(index,1);
			 }
		},
		editNote:(state,action)=>{
			state.data[action.payload.index] = action.payload.value
		}
	
   }

})

export const {addNote,deleteNote,editNote} =  notesSlice.actions;

export default notesSlice.reducer