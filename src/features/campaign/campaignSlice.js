import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns:[]
  
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    newCampaign:((state,action)=>{
        const newCampaign = {
          ...action.payload,
          id: state.campaigns.length + 1,
        };
        state.campaigns.push(newCampaign);
    })
  },
});

// Action creators are generated for each case reducer function
export const { newCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;
