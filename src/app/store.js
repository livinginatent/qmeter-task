import { configureStore } from "@reduxjs/toolkit";

import campaignReducer from '../features/campaign/campaignSlice'
export const store = configureStore({
  reducer: {
    campaign:campaignReducer
  },
});
