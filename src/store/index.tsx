import { configureStore } from "@reduxjs/toolkit";
import configReducer from './sliceConfig'
const store = configureStore({
    reducer: {
        config: configReducer,
    }
  })
  export default store;
  export type RootState = ReturnType<typeof store.getState>