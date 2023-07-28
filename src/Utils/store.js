import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice";
import themeSlice from "./themeSlice";
import VideoDescriptionSlice from "./VideoDescriptionSlice";



const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        theme:themeSlice,
        VideoDescription:VideoDescriptionSlice,        
    },
});

export default store;