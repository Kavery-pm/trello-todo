import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./sliceConfig";
import listsReducer from "./sliceLists";
import modalsReducer from "./sliceModals";
const store = configureStore({
  reducer: {
    config: configReducer,
    lists: listsReducer,
    modals: modalsReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
