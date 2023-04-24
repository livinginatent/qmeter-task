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
      state.campaigns.sort(
        (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
      );
    },
    draftCampaign: (state, action) => {
      const newCampaign = {
        ...action.payload,
        id: state.campaigns.length + 1,
        isDraft: true,
      };
      state.campaigns.push(newCampaign);
      state.campaigns.sort(
        (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
      );
    },
    editDraftCampaign: (state, action) => {
      const { id } = action.payload;
      const draftCampaign = state.campaigns.find(
        (campaign) => campaign.id === id && campaign.isDraft
      );
      const newCampaign = {
        ...action.payload,
        id: id,
        isDraft: false,
      };
      if (draftCampaign) {
        state.campaigns = state.campaigns.filter(
          (campaign) => campaign.id !== draftCampaign.id
        );
        state.campaigns.push(newCampaign);
      }
    },
    deleteCampaign: (state, action) => {
      const id = action.payload;

      state.campaigns = state.campaigns.filter(
        (campaign) => campaign.id !== id
      );
    },
  },
});

export const { newCampaign, draftCampaign, deleteCampaign, editDraftCampaign } =
  campaignSlice.actions;

export default campaignSlice.reducer;
