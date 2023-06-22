import { configureStore } from "@reduxjs/toolkit";
import configReducer from './sliceConfig'
import listsReducer from './sliceLists'
const store = configureStore({
    reducer: {
        config: configReducer,
lists: listsReducer
    }
  })
  export default store;
  export type RootState = ReturnType<typeof store.getState>