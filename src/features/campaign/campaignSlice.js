import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns: [],
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    newCampaign: (state, action) => {
      const newCampaign = {
        ...action.payload,
        id: state.campaigns.length + 1,
        isDraft: false,
      };
      state.campaigns.push(newCampaign);
    },
    markEmailAsDraft: (state, action) => {
      const campaign = state.campaigns.find(
        (c) => c.id === action.payload.campaignId
      );
      if (campaign) {
        const email = campaign.emails.find(
          (e) => e.id === action.payload.emailId
        );
        if (email) {
          email.isDraft = true;
        }
      }
    },
  },
});

export const { newCampaign, markEmailAsDraft } = campaignSlice.actions;

export default campaignSlice.reducer;
