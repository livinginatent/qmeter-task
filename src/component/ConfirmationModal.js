import { styled } from "@mui/material/styles";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newCampaign } from "../features/campaign/campaignSlice";


const CustomButton = styled(Button)`
  background-color: "#6ac17a";
  border-radius: "0";
  height: "40px";
`;

const ConfirmationModal = ({ open, handleClose, type,formData }) => {
  const navigate = useNavigate();

const dispatch = useDispatch()
  const handleConfirm = (path) => {
    dispatch(newCampaign(formData));
    handleClose();
   
    navigate(path);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Are you sure to send the {type}?</DialogTitle>
      <DialogContent>
        <CustomButton
          style={{
            backgroundColor: "#6ac17a",
            borderRadius: "0",
            height: "40px",
          }}
          sx={{ mr: 4 }}
          variant="contained"
          onClick={() => handleConfirm("/")}
        >
          Confirm
        </CustomButton>
        <CustomButton
          style={{
            backgroundColor: "#6ac17a",
            borderRadius: "0",
            height: "40px",
          }}
          variant="contained"
          onClick={handleClose}
        >
          Cancel
        </CustomButton>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
