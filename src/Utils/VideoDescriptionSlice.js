import {createSlice} from  "@reduxjs/toolkit";

const videoDescriptionSlice = createSlice ({
    name:"videoDescription",
    initialState:{
        data:'',
    },
    reducers:{
        addData:(state,action) => {
            state.data  = action.payload
        },
        
    },
});

export const {addData} = videoDescriptionSlice.actions;
export default videoDescriptionSlice.reducer;