import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draft: false,
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    isDraft: (state) => {
      state.draft = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isDraft } = emailSlice.actions;

export default emailSlice.reducer;
