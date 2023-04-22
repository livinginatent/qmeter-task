import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const CustomButton = styled(Button)`
  background-color: "#6ac17a";
  border-radius: "0";
  height: "40px";
`;

const EmailOrSms = ({ open, handleClose }) => {
  

  const navigate = useNavigate();

  const handleNavigateTo = (path) => {
    handleClose();
    navigate(path);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Thread</DialogTitle>
      <DialogContent>
        <CustomButton
          style={{
            backgroundColor: "#6ac17a",
            borderRadius: "0",
            height: "40px",
          }}
          sx={{ mr: 4 }}
          variant="contained"
          onClick={() => handleNavigateTo("email-thread")}
        >
          Email thread
        </CustomButton>
        <CustomButton
          style={{
            backgroundColor: "#6ac17a",
            borderRadius: "0",
            height: "40px",
          }}
          variant="contained"
          onClick={() => handleNavigateTo("sms-thread")}
        >
          SMS thread
        </CustomButton>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailOrSms;
